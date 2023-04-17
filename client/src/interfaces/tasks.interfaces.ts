
export interface ITask  {
    taskId: string | undefined;
    title: string;
    description: string;
    status: string;
    userId?: string;
}

export interface ITasksState {
    allTasks: ITask[] | null;
    task: ITask | null;
}

export interface IStatusGetTask  {
    status: string;
    message: string;
    info: ITask
}

export interface IStatusTask{
    status: string;
    message: string;
    info: ITask | undefined | null;
}
//Error status interface
export interface IStatusTaskError{
    status: string;
    errorMessage: string;
    error: object;
}

export interface IStatusGetAllTask  {
    status: string;
    message: string;
    info: ITask[]
}