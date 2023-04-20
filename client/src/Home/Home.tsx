import React from "react";
import { useDeleteTaskMutation, useGetAllTasksQuery } from "../apis/tasksApi";
import CardTask from "../components/CardTask/CardTask";
import { Toaster, toast } from "react-hot-toast";
import { configToast } from "../utils/toast.utils";

//Move to Divs tasks and draw
// import MovebleDiv from "../components/MovableDiv"
const Home = () => {
  const {data} = useGetAllTasksQuery();


  const [deleteTask, { isError, isLoading, isSuccess, data: dataDelete }] =
  useDeleteTaskMutation();

  const alertAndDelete =  async (_id: string | undefined) => {
    await toast.promise(
      deleteTask(_id).unwrap(),
      {
        loading: 'Cargando...',
        success: (data) => `${data.message}`, 
        error: (err) => `${err.errorMessage}`,  
      },
      configToast
      );
   }
  return (
    < >
      {" "}
      {data?.info.map((task, i) => (
          <CardTask info={task} key={i} alertAndDelete={alertAndDelete}/>
      ))}
      <Toaster></Toaster>
    </>
  );
};

export default Home;
