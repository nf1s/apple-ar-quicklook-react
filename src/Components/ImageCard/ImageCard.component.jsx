import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { FaBook } from "react-icons/fa";

function ImageCard(props) {
  const { card } = props;

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardHeader
        avatar={
            <Avatar aria-label={card.title}>
              <FaBook />
            </Avatar>
        }
        title={card.title}
      />
      <CardContent>
        <a rel="ar" href={card.url}>
          <img src={card.cover} alt="bla" width="400"/>
          </a>
      </CardContent>
    </Card>
  );
}

ImageCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default ImageCard;
