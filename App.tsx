import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainPage from './src/pages/MainPage/MainPage';
import { Alert, StatusBar } from 'react-native';
import TaskContextProvider from './src/context/taskContext/TaskContextProvider';
import ThemeContextProvider from './src/context/themeContext/ThemeContextProvider';
import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function App() {

  useEffect(() => {
    async function requestPermissions() {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Внимание', 'Разрешение на уведомления не получено!');
      }
    }
    requestPermissions();
  }, []);

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
