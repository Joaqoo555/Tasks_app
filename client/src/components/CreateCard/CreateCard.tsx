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
  FormControl,
} from "@mui/material";
import { FormEvent, useState, useEffect } from "react";
import { useAddTaskMutation } from "../../apis/tasksApi";
import { IStatusTaskError, ITask } from "../../interfaces/tasks.interfaces";
import { ChangeEvent } from "react";
import { toast, Toaster } from "react-hot-toast";
import { configToast } from "../../utils/toast.utils";

const CreateCard = () => {
  const [createTask, { isError, isLoading, isSuccess, data }] =
    useAddTaskMutation();
  //le cambio el tipado a la vatiable error, para poder manejar la logica cuando devuelve un error el sevidor
  // const errorTask = error as IStatusTaskError;
  
  const initialTask: ITask = {
    _id: undefined,
    description: "",
    title: "",
    status: "to do",
    userId: "",
  };
  const [task, setTask] = useState(initialTask);

  const handleChangeStatus = (event: React.SyntheticEvent, status: string) => {
    setTask((initial) => ({
      ...initial,
      status,
    }));
  };
  const handleChangeInputs = ({ target }: ChangeEvent<HTMLInputElement>) => {
    //Escucha cada vez que los inputs cambian y va haciendo el set al estado local.
    const nameInput = target.name;
    const valueInput = target.value;
    setTask((initial) => ({
      ...initial,
      [nameInput]: valueInput,
    }));
  };
  const onSubmitForm =  (event: FormEvent) => {
    event.preventDefault();

 //Se crea una alerta con la promesa del create Task
    toast.promise(
      //,unwrap() convierte la función a una promesa
      createTask(task).unwrap(),
      {
        loading: 'Loading',
        success: (data) => `${data.message}`,
        error: (error) => `${error.errorMessage}`,
      },//Configuracion de la alerta
      configToast
    ).then(() => {
      //Seteo el estado al inicial una vez creada la task
      setTask({
        _id: undefined,
        description: "",
        title: "",
        status: "to do",
        userId: "",
      });
    })

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
                error={isError ? true : false}
                id="standard-basic"
                label={"Titulo de Tarea"}
                variant="standard"
                name="title"
                onChange={handleChangeInputs}
                value={task.title}
              />

              {/* Status */}
              <Box sx={{ width: "100%", mt: 4 }}>
                <Typography variant="body1">
                  Seleccionar estado de la tarea
                </Typography>
                <Tabs
                  value={task.status}
                  onChange={handleChangeStatus}
                  textColor="primary"
                  indicatorColor="primary"
                >
                  <Tab value="to do" label="Por hacer" />
                  <Tab value="in progress" label="En progreso" />
                  <Tab value="done" label="Hecha" />
                </Tabs>
              </Box>

              {/* Descriptions */}
              <TextField
                id="standard-multiline-static"
                label="Descripcion"
                multiline
                name="description"
                rows={20}
                variant="standard"
                sx={{
                  mt: 2,
                }}
                onChange={handleChangeInputs}
                value={task.description}
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
              <Toaster />
            </CardActions>
          </Card>
        </form>
      </Grid>
    </Grid>
  );
};

export default CreateCard;
