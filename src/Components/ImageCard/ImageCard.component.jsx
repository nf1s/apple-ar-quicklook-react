import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { FaBook } from "react-icons/fa";

function ImageCard(props) {
  const { card } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <a href={card.url}>
            <Avatar aria-label={card.title}>
              <FaBook />
            </Avatar>
          </a>
        }
        title={card.title}
        subheader={card.subheader}
      />
      <CardMedia
        component="img"
        height="140"
        image={card.cover}
        title={card.title}
      />
      <CardContent>
        <p>bla</p>
      </CardContent>
    </Card>
  );
}

ImageCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default ImageCard;
