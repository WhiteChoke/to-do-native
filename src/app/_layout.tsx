import { StatusBar } from "expo-status-bar";
import TaskContextProvider from "../context/taskContext/TaskContextProvider";
import ThemeContextProvider from "../context/themeContext/ThemeContextProvider";
import { Stack } from "expo-router";


function RootLayout() {

  return (
        <ThemeContextProvider>
          <TaskContextProvider>
            <StatusBar style="light"/>
            <Stack>
              <Stack.Screen 
                name="index"
                options={{
                  headerShown: false
                }}
              />
            </Stack>
          </TaskContextProvider>
        </ThemeContextProvider>
  );
}

export default RootLayout;