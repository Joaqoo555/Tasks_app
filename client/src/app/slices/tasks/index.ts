import { createSlice } from "@reduxjs/toolkit";
import { TasksState } from "../../../interfaces/tasks.interfaces";
//import { GET_Tasks } from "./actions";



const initialState: TasksState = {
  allTasks: null,
  task: null
}


const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    GET_Tasks: (_state, {type, payload}) => {
        
    }
  },
});

export default tasksSlice.reducer;
