import Checkbox from "expo-checkbox";
import { TouchableOpacity } from "react-native";
import { Task } from "../../db/models/taskModel";
import { useState } from "react";
import { changeTaskState, deleteTaskById } from "../../db/repository/TaskReposotory";
import ImageButton from "../ImageButton";
import { useTaskListContext } from "../../context/taskContext/taskContext";
import taskItemStyle from "./taskItemStyle";
import useTheme from "../../hooks/useTheme";
import CustomText from "../CustomText/CustomText";
import { useThemeContext } from "../../context/themeContext/themeContext";
import { router } from "expo-router";

function TaskItem(props: Task) {

    const { taskList, setTaskList } = useTaskListContext();
    const [taskState, setTaskState] = useState<boolean>(props.isComplited)

    const { theme, pallate } = useThemeContext();

    const styles = useTheme(taskItemStyle);

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

    function navigateToTask() {
        router.push({
            pathname: "../../pages/TaskPage/[id]",
            params: { id: props.id }
        })
    }

    return (
        <TouchableOpacity onPress={navigateToTask} style={styles.taskContainer}>
            <Checkbox
                value={taskState}
                onValueChange={handleToggle}
                style={styles.taskState}
                color={pallate.checkboxBorder}
            />
            <CustomText style={styles.title}>{props.title}</CustomText>
            <ImageButton
                imagePath={theme === "light"
                    ? require("../../../assets/close-dark.png")
                    : require("../../../assets/close-light.png")
                }
                onPress={deleteTask}
                imageStyle={styles.deleteImage}
                style={styles.deleteButton}
            />
        </TouchableOpacity>
    );
}

export default TaskItem;