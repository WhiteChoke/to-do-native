import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CustomInput from "../components/CustomInput";
import { useEffect, useState } from "react";
import CusptomButton from "../components/CustomButton";
import SearchInput from "../components/SearchInput";
import Textbutton from "../components/TextButton";
import Header from "../components/Header";
import { Task } from "../db/models/taskModel";
import { deleteAllTask, getTasks, getTasksByFilter, saveTask } from "../db/repository/TaskReposotory";
import TaskItem from "../components/TaskItem";
import { useTaskListContext } from "../context/taskContext/taskContext";

function MainPage() {
  const insets = useSafeAreaInsets();

  const {taskList, setTaskList} = useTaskListContext();
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    async function loadTasks() {
      const tasks = await getTasks();

      setTaskList(tasks ?? []);
    }

    loadTasks()
  }, []);

  async function addTask() {
    const taskTitle = title.trim();

    if (taskTitle.length <= 0) { return; }

    const createdTask = await saveTask({ title: taskTitle, isComplited: false } as Task);

    setTaskList([...taskList, createdTask]);
    setTitle("");
  }

  async function filterData(value: string) {
    const filtred = await getTasksByFilter(value);

    setTaskList(filtred);
  }

  async function deleteTasks() {
    await deleteAllTask();
    setTaskList([]);
  }

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <Header text="To Do List" />
      <View style={styles.createTask}>
        <CustomInput
          placeholder="New task title"
          value={title}
          setValue={setTitle}
        />
        <CusptomButton text="Add" onPress={() => addTask()} />
      </View>
      <SearchInput placeholder="Search task" filter={filterData} />
      <View style={styles.taskDataContainer}>
        <Text>Total Tasks: {taskList.length}</Text>
        <Textbutton onPress={deleteTasks} text="Delete All" />
      </View>
      <FlatList
        style={styles.taskList}
        data={taskList}
        keyExtractor={t => t.id.toString()}
        renderItem={t =>
          <TaskItem
            id={t.item.id}
            isComplited={t.item.isComplited}
            title={t.item.title} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "FFDF7",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 60,
  },
  createTask: {
    flexDirection: "row",
    marginVertical: 25,
    gap: 10,
  },
  taskDataContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    width: "100%",
    marginVertical: 16
  },
  taskList: {
    flex: 1,
    width: "100%",
  }
});

export default MainPage;
