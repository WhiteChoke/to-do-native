import { useMemo, useState } from "react";
import { TaskContextType, TaskListContext } from "./taskContext";
import { Task } from "../../db/models/taskModel";

function TaskContextProvider({ children }: { children: React.ReactNode }) {
    const [taskList, setTaskList] = useState<Task[]>([]);

    const contextValue = useMemo<TaskContextType>(() => ({
        taskList,
        setTaskList,
    }), [taskList]);

    return (
        <TaskListContext.Provider value={contextValue}>
            {children}
        </TaskListContext.Provider>
    );
}

export default TaskContextProvider;