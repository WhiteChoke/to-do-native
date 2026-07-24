import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainPage from './src/pages/MainPage';
import { StatusBar } from 'react-native';
import TaskContextProvider from './src/context/taskContext/TaskContextProvider';

export default function App() {

  return (
    <SafeAreaProvider>
      <TaskContextProvider>
        <MainPage/>
        <StatusBar barStyle="default"/>
      </TaskContextProvider>
    </SafeAreaProvider>
  );
}
