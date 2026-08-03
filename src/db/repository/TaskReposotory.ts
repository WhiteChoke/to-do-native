import AsyncStorage from "@react-native-async-storage/async-storage";
import { Task } from "../models/taskModel";

export async function getTasks(): Promise<Task[] | null> {
    try {
        const taskKeys = await getAllTaskKey();

        const items = await AsyncStorage.multiGet(taskKeys);

        const resultList = items
            .map(([_, value]) => {
                if (value !== null) {
                    try {
                        return JSON.parse(value) as Task;
                    } catch (e) {
                        console.error("failed to pasre task json: " + e)
                        return null;
                    }
                } else { return null; }
            }).filter(task => task !== null);

        return resultList;
    } catch (e) {
        console.error("failed to load tasks " + e)
        return null;
    }
}

export async function saveTask(task: Task): Promise<Task> {
    const id = await generateId();
    task.id = id; 
    await AsyncStorage.setItem(`task_${id}`, JSON.stringify(task));

    return task;
}

export async function getTasksByFilter(value: string) {
    const tasks = await getTasks() ?? [];
    
    return tasks.filter((t: Task) => 
        t.title.toLowerCase().includes(value.toLowerCase()));
}

export async function deleteAllTask(): Promise<void> {
    const taskKeys = await getAllTaskKey();

    await AsyncStorage.multiRemove(taskKeys);
}

export async function changeTaskState(id: number) {
    const key = "task_" + id;
    const task = await AsyncStorage.getItem(key);

    if (task === null) {
        throw new Error("Not found task with id=" + id);
    }

    const deserializedTask = JSON.parse(task) as Task;
    deserializedTask.isComplited = !deserializedTask.isComplited;

    await AsyncStorage.setItem(key, JSON.stringify(deserializedTask));

    return deserializedTask.isComplited;
}

export async function deleteTaskById(id: number) {
    await AsyncStorage.removeItem(`task_${id}`);
}

async function getAllTaskKey(): Promise<string[]> {
    const keys = await AsyncStorage.getAllKeys();
    return keys.filter((key: string) => key.startsWith("task_"));

}

async function generateId(): Promise<number> {
    const keys = await getAllTaskKey();
    
    if (keys.length === 0) { return 1 }

    const ids = keys.map(key => Number.parseInt(key.split("_").at(-1) ?? "0"))
    const index = Math.max(...ids) + 1;

    return index;
}