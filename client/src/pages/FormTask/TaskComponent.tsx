import { Container } from "@mui/material";
import { useAddTaskMutation } from "../../apis/tasksApi"
import CreateCard from "../../components/CreateCard/CreateCard";



const FormTask = () => {


  return (
    <Container sx={{
      mt: 2
      
    }}>
      <CreateCard></CreateCard>          
    </Container>
  )
}

export default FormTask