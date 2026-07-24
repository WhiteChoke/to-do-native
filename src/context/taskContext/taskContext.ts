import { createContext, useContext } from "react";
import { Task } from "../../db/models/taskModel";

export interface TaskContextType {
    taskList: Task[];
    setTaskList: (value: Task[]) => void
}

export const TaskListContext = createContext<TaskContextType | null>(null);

export function useTaskListContext(): TaskContextType {
    const context = useContext(TaskListContext);

    if (!context) {
        throw new Error("useTaskListContext most be use with taskListContext");
    }

    return context;
}

