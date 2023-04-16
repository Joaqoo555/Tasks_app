import React from "react";
import { useGetAllTasksQuery } from "../apis/tasksApi";
import { Button } from "@mui/material";
import CardTask from "../components/CardTask/CardTask";
//Move to Divs tasks and draw
// import MovebleDiv from "../components/MovableDiv"
const Home = () => {
  const { data } = useGetAllTasksQuery();
  return (
    < >
      {" "}
      {data?.map((task) => (
          <CardTask info={task}/>
      ))}
    </>
  );
};

export default Home;
