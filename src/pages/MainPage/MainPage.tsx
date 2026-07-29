import { Button, FlatList, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import Textbutton from "../../components/TextButton";
import Header from "../../components/Header/Header";
import { deleteAllTask, getTasks, getTasksByFilter } from "../../db/repository/TaskReposotory";
import TaskItem from "../../components/TaskItem/TaskItem";
import { useTaskListContext } from "../../context/taskContext/taskContext";
import CreateTaksModal from "../../components/CreateTaskModal/CreateTaskModal";
import ImageButton from "../../components/ImageButton";
import { useThemeContext } from "../../context/themeContext/themeContext";
import mainPageStyle from "./mainPageStyle";
import useTheme from "../../hooks/useTheme";
import CustomText from "../../components/CustomText/CustomText";

function MainPage() {
  const insets = useSafeAreaInsets();

  const { taskList, setTaskList } = useTaskListContext();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const {theme, changeTheme } = useThemeContext();
  const styles = useTheme(mainPageStyle); 
  
  useEffect(() => {
    async function loadTasks() {
      const tasks = await getTasks();

      setTaskList(tasks ?? []);
    }

    loadTasks()
  }, []);

  async function filterData(value: string) {
    const filtred = await getTasksByFilter(value);

    setTaskList(filtred);
  }

  async function deleteTasks() {
    await deleteAllTask();
    setTaskList([]);
  }

  return (
    <View style={[styles.mainContainer, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <View style={styles.taskContainer}>
        <Header text="To Do List" />
        <SearchInput placeholder="Search task" filter={filterData} />
        <View style={styles.taskDataContainer}>
          <CustomText>Total Tasks: {taskList.length}</CustomText>
          <Textbutton onPress={deleteTasks} text="Delete All" />
        </View>
        <FlatList
          style={styles.taskList}
          data={taskList}
          keyExtractor={t => t.id.toString()}
          renderItem={t =>
            <TaskItem
              id={t.item.id}
              isComplited={t.item.isComplited}
              title={t.item.title} />
          }
        />
        <CreateTaksModal setIsVisible={setIsModalVisible} isVisible={isModalVisible} />
      </View>
      <ImageButton
        onPress={() => setIsModalVisible(true)}
        imagePath= {theme === "light" 
          ? require("../../../assets/add-dark.png") 
          : require("../../../assets/add-light.png")
        }
        imageStyle={{ height: 75, width: 75 }}
        style={{ marginLeft: "auto", marginRight: 30 }}
      />
      <Button title="change theme" onPress={changeTheme}/>
    </View>
  );
}

export default MainPage;
