import { ITask } from "../../interfaces/tasks.interfaces";
export default interface ICardTaskProps {
    info: ITask;
    alertAndDelete:(_id: string | undefined) => Promise<void>;
}