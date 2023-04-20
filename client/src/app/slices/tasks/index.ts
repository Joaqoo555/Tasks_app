import { RootState } from './../../store';
import { createSlice } from "@reduxjs/toolkit";
import { ITasksState } from "../../../interfaces/tasks.interfaces";


// Define the initial state using that type
const initialState: ITasksState = {
  allTasks: [],
  task: null,
};

export const tasksSlice = createSlice({
  name: "tasks",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

export const {} = tasksSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default tasksSlice.reducer;
