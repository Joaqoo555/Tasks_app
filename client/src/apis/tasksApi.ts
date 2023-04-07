import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { Task } from "../interfaces/tasks.interfaces";
import baseUrl from "../config"

// Define a service using a base URL and expected endpoints
export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  //fetch
  baseQuery: fetchBaseQuery({ baseUrl}),


  //endpoints for the baseUrl
  endpoints: (builder) => ({
    //Obtener todas las tasks existentes
    getAllTasks: builder.query<Task[], void>({
      query: () => `tasks/`,
      
    }),
    //Obtener tasks por ID
    getTaskById: builder.query<Task, string>({
        query: (id) => `tasks/${id}`,
    }),
    //Primer parametro es lo que recibo de la respuesta del post, que debe poseer un userId, el segundo parametro es la interface que se le va a proporcionar al addtask
    addTask: builder.mutation<Pick<Task, 'userId'>, Task>({
      query: (newTask) => ({
        url: "tasks",
        method: "POST",
        body: newTask
      })
    })

  }),
})

//Hooks
export const { useGetAllTasksQuery, useGetTaskByIdQuery, useAddTaskMutation } = tasksApi