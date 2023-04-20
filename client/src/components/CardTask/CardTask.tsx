import ICardTaskProps from "./interface";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CardHeader from "@mui/material/CardHeader";
import { Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDeleteTaskMutation } from "../../apis/tasksApi";
import { useEffect } from "react";
import { configToast } from "../../utils/toast.utils";



const CardTask = ({ info, alertAndDelete }: ICardTaskProps) => {
  const { description, status, title, userId, _id } = info;
  const navigate = useNavigate();
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
          onClick={()=> alertAndDelete(_id)}
        >

        </DeleteForeverIcon>
      </CardActions>
      <CardHeader title={title} ></CardHeader>
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
          {/* Se navega al ID correspondiente para leer la descripcion de la tarea. */}
          <Button onClick={() => navigate(`/tasks/details/${_id}`)}>
            Descripcion completa
          </Button>
        </CardActions>
      </Grid>

    </Card>
  );
};

export default CardTask;
