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
import { FormEvent, useState, useEffect } from "react";
import { useAddTaskMutation } from "../../apis/tasksApi";
import { IStatusTaskError, ITask } from "../../interfaces/tasks.interfaces";
import { ChangeEvent } from "react";
import { toast, Toaster } from "react-hot-toast";
import { configToast } from "../../utils/toast.utils";

const CreateCard = () => {
  const [createtask, { isError, isLoading, isSuccess, data, error }] = useAddTaskMutation();
  //le cambio el tipado a la vatiable error, para poder manejar la logica cuando devuelve un error el sevidor
  const errorTask = error as IStatusTaskError;

  const notifyError = (): string => toast(`${errorTask.errorMessage}`, configToast);
  const notifySuccess = (): string => toast(`${data?.message}`, configToast)
  useEffect(() => {
    if (isError) {
      notifyError();
    }
    else if (isSuccess) {
       notifySuccess();
    }
  }, [isError, isSuccess]);

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
    const nameInput = target.name;
    const valueInput = target.value;
    setTask((initial) => ({
      ...initial,
      [nameInput]: valueInput,
    }));
  };
  const onSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    await createtask(task).unwrap();
    setTask(initialTask);
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
                error = {isError ? true : false}
                id="standard-basic"
                label={"Titulo de Tarea"}
                variant="standard"
                name="title"
                onChange={handleChangeInputs}
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
                  <Tab value="in progress" label="en progreso" />
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
