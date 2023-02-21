import react from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CardBody = ({ imageInfo, contentInfo }) => {
  const { contentTitle, contentBody } = contentInfo;
  return (
    <div>
      <CardMedia {...imageInfo} />
      <CardContent sx={{ height: 50 }}>
        <Typography gutterBottom variant="h5" component="div">
          {contentTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {contentBody}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Bookmark</Button>
        <Button size="small">View</Button>
      </CardActions>
    </div>
  );
};

export default CardBody;
