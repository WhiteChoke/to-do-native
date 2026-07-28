import Checkbox from "expo-checkbox";
import { StyleSheet, Text, View } from "react-native";
import { Task } from "../../db/models/taskModel";
import { useState } from "react";
import { changeTaskState, deleteTaskById } from "../../db/repository/TaskReposotory";
import ImageButton from "../ImageButton";
import { useTaskListContext } from "../../context/taskContext/taskContext";
import { useThemeContext } from "../../context/themeContext/themeContext";
import taskItemStyle from "./taskItemStyle";

function TaskItem(props: Task) {

    const { taskList, setTaskList } = useTaskListContext();
    const [taskState, setTaskState] = useState<boolean>(props.isComplited)

    const theme = useThemeContext();
    const styles = taskItemStyle(theme.pallate);

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
                imagePath={require("../../../assets/close.png")}
                onPress={deleteTask}
                imageStyle={styles.deleteImage}
                style={styles.deleteButton}
            />
        </View>
    );
}

export default TaskItem;