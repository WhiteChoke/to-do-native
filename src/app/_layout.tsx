import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TaskContextProvider from "../context/taskContext/TaskContextProvider";
import ThemeContextProvider from "../context/themeContext/ThemeContextProvider";
import { Stack } from "expo-router";

function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeContextProvider>
        <TaskContextProvider>
          <StatusBar 
            style="auto"
           />
          <Stack/>
        </TaskContextProvider>
      </ThemeContextProvider>
    </SafeAreaProvider>
  );
}

export default RootLayout;