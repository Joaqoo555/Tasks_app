import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { IStatusGetAllTask, IStatusGetTask, IStatusTask, IStatusTaskError, ITask } from "../interfaces/tasks.interfaces";
import { AppDispatch } from "../app/store";
import baseUrl from "../config"


// Define a service using a base URL and expected endpoints
export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  //fetch
  baseQuery: fetchBaseQuery({baseUrl}),
  // refetchOnMountOrArgChange: true,
  // refetchOnFocus: true,



  tagTypes: ['Posts', 'Deletes', 'Updates'],
  //endpoints for the baseUrl
  endpoints: (builder) => ({
    //Obtener todas las tasks existentes
    getAllTasks: builder.query<IStatusGetAllTask, void>({
      query: () => `tasks`,
      transformErrorResponse: (errorResponse) => {
        const {data} = errorResponse;
        const dataErrors = data as IStatusTaskError;
        return dataErrors
      } ,
      providesTags: ["Deletes", "Updates", "Posts"]
      
    }),
    //Obtener tasks por ID
    getTaskById: builder.query<IStatusGetTask, string>({
        query: (id) => `tasks/${id}`,
        transformErrorResponse: (errorResponse) => {
          const {data} = errorResponse;
          const dataErrors = data as IStatusTaskError;
          return dataErrors
        } 
    }),
    //Primer parametro es lo que recibo de la respuesta del post, que debe poseer un userId, el segundo parametro es la interface que se le va a proporcionar al addtask
    addTask: builder.mutation<IStatusTask, ITask>({
      query: (newTask: ITask) => ({
        url: "tasks",
        method: "post",
        body: newTask,

      }),
      invalidatesTags: ["Posts"],
      transformErrorResponse: (errorResponse) => {
        const {data} = errorResponse;
        const dataErrors = data as IStatusTaskError;
        return dataErrors
      } 
    }),
    
    //Primer parametro es lo que recibo de la respuesta del post, el segundo parametro es la interface que se le va a proporcionar al deleteTask
    deleteTask: builder.mutation<IStatusTask, string | undefined>({
      query: (idTask: string) => ({
        url: `tasks/${idTask}`,
        method: "delete"
      }),
      invalidatesTags: ["Deletes"],

      transformErrorResponse: (errorResponse) => {
        const {data} = errorResponse;
        const dataErrors = data as IStatusTaskError;
        return dataErrors
      } 
    }),
    //El primer parametro combierte toda la interface ITask a posiblemente puedan llegar algunos de esos argumentos, pero q es necesario q traiga el task ID, el segundo parametro indica que va a devolver el task upgraded
    updateTask: builder.mutation<IStatusTask, ITask>({
      query: (taskUpdate: ITask) => ({
        url: `task/${taskUpdate._id}`,
        method: "put",
        body: taskUpdate,
      }),
      invalidatesTags: ["Updates"],

      transformErrorResponse: (errorResponse) => {
        const {data} = errorResponse;
        const dataErrors = data as IStatusTaskError;
        return dataErrors
      } 
    })
  }),
})


//Hooks
export const { useGetAllTasksQuery, useGetTaskByIdQuery, useAddTaskMutation, useUpdateTaskMutation, useDeleteTaskMutation } = tasksApi