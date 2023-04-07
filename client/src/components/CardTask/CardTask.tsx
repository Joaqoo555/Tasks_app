import CardTaskProps from "./interface";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


const CardTask = ({ info }: CardTaskProps) => {
  const { description, status, title, userId } = info;
  return (
    <Card sx={{ maxWidth: 200, m: 1 }}>
      <CardContent sx={{ p: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">state</Button>
      </CardActions>
    </Card>
  );
};

export default CardTask;
