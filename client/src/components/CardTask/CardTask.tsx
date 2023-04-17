import CardTaskProps from "./interface";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CardHeader from "@mui/material/CardHeader";
import { Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { useDeleteTaskMutation } from "../../apis/tasksApi";
import { useEffect } from "react";
import { configToast } from "../../utils/toast.utils";
const CardTask = ({ info }: CardTaskProps) => {
  const { description, status, title, userId, _id } = info;
  const navigate = useNavigate();
  const notifyDelete = () => {
     toast("Se elimino efectivamente...", configToast);
  };
  const notifyDeleteError = () => {
    toast("No se pudo eliminar", configToast);
  };
  const [deleteTask, { isError, isLoading, isSuccess }] =
    useDeleteTaskMutation();

  useEffect(() => {
    console.log(isSuccess, isError);
    if (isSuccess) {
      notifyDelete();
    }else if(isError){
      notifyDeleteError();
    }
  }, [isSuccess, isError]);

  return (
    <Card
      sx={{
        width: "48%",
        m: 1,
        position: "relative",
      }}
    >
      <CardActions>
        <DeleteForeverIcon
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            p: 0.5,
            height: 28,
            width: 28,
            m: 0.5,
            cursor: "pointer",
          }}
          onClick={async () => {
              await deleteTask(_id).unwrap();

          }}
        ></DeleteForeverIcon>
        <Toaster></Toaster>
      </CardActions>
      <CardHeader title={title} sx={{}}></CardHeader>
      <CardContent sx={{ p: 1 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <Grid container justifyContent={"flex-end"}>
        <CardActions>
          <Button size="medium" onClick={() => {}}>
            Editar
          </Button>
          <Button size="medium" onClick={() => {}}>
            Estado
          </Button>
          <Button onClick={() => navigate(`/tasks/details/${_id}`)}>
            Descripcion completa
          </Button>
          <Toaster />
        </CardActions>
      </Grid>
    </Card>
  );
};

export default CardTask;
