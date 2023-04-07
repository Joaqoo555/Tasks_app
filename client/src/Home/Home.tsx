import React from "react";
import { useGetAllTasksQuery } from "../apis/tasksApi";
import { Button } from "@mui/material";
import CardTask from "../components/CardTask/CardTask";
//Move to Divs tasks and draw
// import MovebleDiv from "../components/MovableDiv"
const Home = () => {
  const { data } = useGetAllTasksQuery();
  return (
    <div>
      {" "}
      {data?.map((task) => (
          <CardTask info={task}/>
      ))}
      {/* <MovebleDiv/> */}
    </div>
  );
};

export default Home;
