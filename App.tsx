import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainPage from './src/pages/MainPage/MainPage';
import { StatusBar } from 'react-native';
import TaskContextProvider from './src/context/taskContext/TaskContextProvider';
import ThemeContextProvider from './src/context/themeContext/ThemeContextProvider';

export default function App() {

  return (
    <SafeAreaProvider>
      <ThemeContextProvider>
        <TaskContextProvider>
          <MainPage />
          <StatusBar barStyle="default" />
        </TaskContextProvider>
      </ThemeContextProvider>
    </SafeAreaProvider>
  );
}
