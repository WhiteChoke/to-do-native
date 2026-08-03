import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useTaskListContext } from "../../../context/taskContext/taskContext";
import { Task } from "../../../db/models/taskModel";

function TaskPage() {

    const taskId = useLocalSearchParams<{ id: string }>();
    const { taskList } = useTaskListContext();
    const [foundTask, setFoundTask] = useState<Task | undefined>();

    useEffect(() => {
        setFoundTask(taskList.find((t) => t.id === Number(taskId.id)))
    }, []);

    return (
        <View>
            {foundTask !== undefined
                ? <Text>{foundTask.title}</Text>
                : <Text>not found</Text>}
        </View>);
}

export default TaskPage;