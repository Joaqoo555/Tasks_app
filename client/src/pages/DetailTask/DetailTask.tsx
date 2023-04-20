import React from "react";
import { useGetTaskByIdQuery } from "../../apis/tasksApi";
import { useParams } from "react-router-dom";

const DetailTask = () => {
  const {_id} = useParams()
  const {data} = useGetTaskByIdQuery(_id);
  console.log(data)
  return <div>

  </div>;
};

export default DetailTask;
