import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaSingleCard(props) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 10,
        boxShadow: 5,
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.075)",
        },
      }}
    >
      <CardMedia sx={{ height: 200 }} image={props.link} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="#34C9B6">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.sub_title}
        </Typography>
      </CardContent>
    </Card>
  );
}
