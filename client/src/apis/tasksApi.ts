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
      query: (newTask: Task) => ({
        url: "tasks",
        method: "post",
        body: newTask
      })
    }),
    //Primer parametro es lo que recibo de la respuesta del post, el segundo parametro es la interface que se le va a proporcionar al deleteTask
    deleteTask: builder.mutation<any, string>({
      query: (idTask: string) => ({
        url: "tasks",
        method: "delete"
      })
    }),
    //El primer parametro combierte toda la interface Task a posiblemente puedan llegar algunos de esos argumentos, pero q es necesario q traiga el task ID, el segundo parametro indica que va a devolver el task upgraded
    updateTask: builder.mutation<Partial<Task> & Pick<Task, 'taskId'>, Task>({
      query: (taskUpdate: Task) => ({
        url: "tasks",
        method: "put"
      })
    })
  }),
})

//Hooks
export const { useGetAllTasksQuery, useGetTaskByIdQuery, useAddTaskMutation, useUpdateTaskMutation, useDeleteTaskMutation } = tasksApi