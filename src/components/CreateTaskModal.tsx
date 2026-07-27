import { useState } from "react";
import { useTaskListContext } from "../context/taskContext/taskContext";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { saveTask } from "../db/repository/TaskReposotory";
import { Task } from "../db/models/taskModel";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import Textbutton from "./TextButton";

interface CreateTaskModalProps {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
}

type dateMode = "date" | "time"

function CreateTaksModal(props: CreateTaskModalProps) {
  const { taskList, setTaskList } = useTaskListContext();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState(new Date());

  function selectDate(currentMode: dateMode): void {
    DateTimePickerAndroid.open({
      value: date,
      onValueChange: (_, selectedDate) => setDate(selectedDate),
      mode: currentMode,
      is24Hour: true,
      /** 
       be fucking carefull to change "default" -> "material" 
       or your apk will crush af when u'll try to change date
       i think i need to change app.json
      **/
      design: "default",
      minimumDate: new Date(),
    });
  };

  async function addTask() {
    const taskTitle = title.trim();

    if (taskTitle.length <= 0) { return; }

    const createdTask = await saveTask({ title: taskTitle, description: description, isComplited: false } as Task);

    setTaskList([...taskList, createdTask]);
    setTitle("");
    setDescription("");

    props.setIsVisible(false);
  }

  return (
    <Modal
      visible={props.isVisible}
      transparent={true}
    >
      <Pressable style={styles.touchableContainer} onPress={() => props.setIsVisible(false)}>
        <View style={styles.mainContainer}>
          <CustomInput
            placeholder="New task title"
            value={title}
            setValue={setTitle}
          />
          <CustomInput
            placeholder="New task description"
            value={description}
            setValue={setDescription}
            style={{height: 150}}
            multiline={true}       
          />
          <View>
            <View style={styles.dateContainer}>
              <Text>Select date: </Text>
              <Textbutton
                onPress={() => selectDate('date')}
                text={date.toLocaleDateString()}
              />
            </View>
            <View style={styles.dateContainer}>
              <Text>Select time: </Text>
              <Textbutton
                onPress={() => selectDate('time')}
                text={date.toLocaleTimeString()}
              />
            </View>
          </View>
          <CustomButton
            text="Add"
            onPress={() => addTask()}
          />
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  touchableContainer: {
    flex: 1,
    backgroundColor: "#00000080",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 60,
    flexDirection: "column"
  },
  mainContainer: {
    backgroundColor: "#FFFDF7",
    alignItems: "stretch",
    width: "100%",
    borderRadius: 15,
    padding: 10,
    gap: 15
  },
  dateContainer: {
    flexDirection: "row",
  },
});

export default CreateTaksModal;