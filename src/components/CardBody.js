import react from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FaRegHeart } from "react-icons/fa";

import "./styles/CardBody.css";
const CardBody = ({ imageInfo, contentInfo }) => {
  const { contentTitle, contentBody } = contentInfo;
  return (
    <div className="CardContainer">
      <CardMedia {...imageInfo} />
      <CardContent sx={{ height: 50 }}>
        <Typography gutterBottom variant="h5" component="div">
          {contentTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {contentBody}
        </Typography>
      </CardContent>
      <CardActions sx={{ margin: 0, padding: 0 }} className="CardButtons">
        <Button id="FavButton" size="small">
          <FaRegHeart />
        </Button>
        <Button id="ReserveButton" size="small">
          Reserve
        </Button>
        <Button id="ViewButton" size="small">
          View
        </Button>
      </CardActions>
    </div>
  );
};

export default CardBody;
