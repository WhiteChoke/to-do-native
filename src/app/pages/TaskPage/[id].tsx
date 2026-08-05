import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useTaskListContext } from "../../../context/taskContext/taskContext";
import { Task } from "../../../db/models/taskModel";
import { useThemeContext } from "../../../context/themeContext/themeContext";

function TaskPage() {

  const taskId = useLocalSearchParams<{ id: string }>();
  const { taskList } = useTaskListContext();
  const [foundTask, setFoundTask] = useState<Task | undefined>();
  const { theme } = useThemeContext();

  useEffect(() => {
    setFoundTask(taskList.find((t) => t.id === Number(taskId.id)))
  }, []);

  return (
    <View>
      <Stack.Screen
        options={{
          title: foundTask?.title,
          headerTitleAlign: "center",
          // statusBarStyle: 
        }} />
      {foundTask !== undefined
        ? <Text>{foundTask.title}</Text>
        : <Text>not found</Text>}
    </View>);
}

export default TaskPage;