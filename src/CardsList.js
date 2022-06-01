import React, { useEffect, useState } from "react";
import "./App.css";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { motion } from "framer-motion";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(() => ({
  marginLeft: "auto",
}));

export default function CardsList({ data }) {
  const [isLiked, setIsLiked] = useState(false);
  const [tab, setTab] = useState([]);

  const addLikes = (id) => {
    // setLikesItem(like + 1);
    setIsLiked(!isLiked);
  };

  const removeItem = (id) => {
    var lists = tab.filter((x) => {
      return x.id !== id;
    });
    setTab(lists);
  };

  useEffect(() => {
    setTab(data);
  }, [data]);

  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="popular-movies"
    >
      {tab.map((item) => (
        <Card sx={{ maxWidth: 345, bgcolor: grey[200] }} key={item.id}>
          <CardHeader title={item.title} subheader={item.category} />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Likes: {item.likes}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Dislikes: {item.dislikes}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              aria-label="add to favorites"
              onClick={() => addLikes(item.id)}
            >
              <ThumbUpIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ThumbDownIcon />
            </IconButton>
            <ExpandMore
              aria-label="show more"
              onClick={() => removeItem(item.id)}
            >
              <DeleteForeverIcon />
            </ExpandMore>
          </CardActions>
        </Card>
      ))}
    </motion.div>
  );
}
