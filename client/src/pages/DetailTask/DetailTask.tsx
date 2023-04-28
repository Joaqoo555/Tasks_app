import { useGetTaskByIdQuery } from "../../apis/tasksApi";
import { useParams } from "react-router-dom";
import Container from '@mui/material/Container'

const DetailTask = () => {
  const { _id } = useParams();
  const { data } = useGetTaskByIdQuery(_id);
  console.log(data?.info);
  return (
    <Container >
      <h1>{data?.info?.title}</h1>
        <p>{data?.info?.description}</p>
      <p>{data?.info?.status}</p>
  </Container>
  )

};

export default DetailTask;
