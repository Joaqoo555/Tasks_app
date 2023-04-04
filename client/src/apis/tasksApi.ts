import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { Task } from "../interfaces/tasks.interfaces";
import baseUrl from "../config"

// Define a service using a base URL and expected endpoints
export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    //Obtener todas las tasks existentes
    getAllTasks: builder.query<Task[], void>({
      query: () => `tasks/`,
    }),
    //Obtener tasks por ID
    getTaskById: builder.query<Task, string>({
        query: (id) => `tasks/${id}`,
    })
  }),
})


export const { useGetAllTasksQuery, useGetTaskByIdQuery } = tasksApi