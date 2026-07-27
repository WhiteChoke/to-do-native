import Checkbox from "expo-checkbox";
import { StyleSheet, Text, View } from "react-native";
import { Task } from "../db/models/taskModel";
import { useState } from "react";
import { changeTaskState, deleteTaskById } from "../db/repository/TaskReposotory";
import ImageButton from "./ImageButton";
import { useTaskListContext } from "../context/taskContext/taskContext";

function TaskItem(props: Task) {

    const {taskList, setTaskList} = useTaskListContext();
    const [taskState, setTaskState] = useState<boolean>(props.isComplited)

    async function handleToggle() {
        try {
            const res = await changeTaskState(props.id);
            setTaskState(res)
        } catch (e) {
            console.error("Failed to change task state " + e)
        }
    }

    async function deleteTask() {
        try {
            await deleteTaskById(props.id)
            
            const updatedTaskList = taskList.filter(t => t.id !== props.id)
            setTaskList(updatedTaskList)
        } catch (e) {
            console.error("Failed to delete task " + e)
        }
    }

    return (
        <View style={styles.taskContainer}>
            <Checkbox
                value={taskState}
                onValueChange={handleToggle}
                style={styles.taskState}
                color="#2C2C2C"
            />
            <Text style={styles.title}>{props.title}</Text>
            <ImageButton
                imagePath={require("../../assets/close.png")}
                onPress={deleteTask} 
                imageStyle={styles.deleteImage}
                style={styles.deleteButton}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    taskContainer: {
        flex: 1,
        flexDirection: "row",
        gap: 10,
        height: "15%",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#D9D9D9",
        borderWidth: 1,
        borderStyle: "solid",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
        marginVertical: 8,
    },
    taskState: {
        borderRadius: 5,
        height: 25,
        width: 25
    },
    title: {
        fontSize: 24,
        flexShrink: 1
    },
    deleteImage: {
        height: 25,
        width: 25,
    },
    deleteButton: {
        marginLeft: "auto",
    }
});


export default TaskItem;