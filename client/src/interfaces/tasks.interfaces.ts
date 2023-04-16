
export interface Task  {
    taskId?: string;
    title: string;
    description: string;
    status: string;
    userId?: string;
}

export interface TasksState {
    allTasks: Task[] | null;
    task: Task | null;
}

