import * as React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Typography,
  Tab,
  Tabs,
  Box,
} from "@mui/material";
import { FormEvent, useState } from "react";
import { useAddTaskMutation } from "../../apis/tasksApi";
import { IStatusTaskError, ITask } from "../../interfaces/tasks.interfaces";
import { ChangeEvent } from "react";

const CreateCard = () => {
  const [createtask, {
    isError,
    isLoading,
    isSuccess,
    data,
    error
  }] = useAddTaskMutation();
  //data.message
  const errorHandler = error as IStatusTaskError
  if(isError) {
  console.log(errorHandler.errorMessage);
  console.log(errorHandler.status);
  console.log(errorHandler.error);
  
  }
  
  const initialtask: ITask = {
    taskId: undefined,
    description: "",
    title: "",
    status: "to do",
    userId: "",
  };

  const [task, setTask] = useState(initialtask);

  const handleChangeStatus = (event: React.SyntheticEvent, status: string) => {
    setTask((initial) => ({
      ...initial,
      status,
    }));
  };
  const handleChangeInputs = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const nameInput = target.name;
    const valueInput = target.value;
    setTask((initial) => ({
      ...initial,
      [nameInput]: valueInput,
    }));
  };
  const onSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    createtask(task)

  };
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item width={"100%"}>
        <form onSubmit={onSubmitForm}>
          <Card>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Title */}
              <TextField
                id="standard-basic"
                label="Title"
                variant="standard"
                name="title"
                onChange={handleChangeInputs}
              />

              {/* Status */}
              <Box sx={{ width: "100%", mt: 4 }}>
                <Typography variant="body1" color="initial">
                  Seleccionar estado de la tarea
                </Typography>
                <Tabs
                  value={task.status}
                  onChange={handleChangeStatus}
                  textColor="primary"
                  indicatorColor="primary"
                >
                  <Tab value="to do" label="Por hacer" />
                  <Tab value="in progress" label="en progreso" />
                  <Tab value="done" label="Hecha" />
                </Tabs>
              </Box>

              {/* Descriptions */}
              <TextField
                id="standard-multiline-static"
                label="Description"
                multiline
                name="description"
                rows={20}
                variant="standard"
                sx={{
                  mt: 2,
                }}
                onChange={handleChangeInputs}
              />
            </CardContent>

            {/* Send Form */}
            <CardActions
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button type="submit" variant="contained">
                Crear Tarea
              </Button>
            </CardActions>
          </Card>
        </form>
      </Grid>
    </Grid>
  );
};

export default CreateCard;
