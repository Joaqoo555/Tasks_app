import CardTaskProps from "./interface";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CardHeader from "@mui/material/CardHeader";


const CardTask = ({ info }: CardTaskProps) => {
  const { description, status, title, userId } = info;
  return (
    <Card sx={{ maxWidth: 200, m: 1, position: "relative" }}>
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
          onClick={() => {}}
        ></DeleteForeverIcon>
      </CardActions>
      <CardHeader title={title}></CardHeader>
      <CardContent sx={{ p: 1 }}>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => {}}>
          Edit
        </Button>
        <Button size="small" onClick={() => {}}>
          state
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardTask;
