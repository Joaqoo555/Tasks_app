
export interface Task  {
    title: string;
    description: string;
    status: string;
    userId: string | null;
}

export interface TasksState {
    allTasks: Task[] | null;
    task: Task | null;
}

