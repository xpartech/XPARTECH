import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, CardHeader, CardMedia } from "@mui/material";
import { Fade, Slide } from "react-awesome-reveal";

const StyledCard = styled((props) => <Card {...props} />)(({ theme }) => ({
  maxWidth: 500,
  marginLeft: "2rem",
  marginRight: "2rem",
  marginBottom: "1rem",
  marginTop: "1rem",
  borderRadius: "20px",
  backgroundColor: "#ffffff",
  boxshadow: "2px 12px 16px 0 rgba(0, 0, 0, 0.25)-8px -8px 12px 0 rgba(255, 255, 255, 0.3)",
// display: flex,
// height: 100%,
// justify-content: center,
// margin-right: 4rem,
// width: 100%
}));

const CardComponent = (props) => {
  const { title, content, image } = props;

  return (
      <StyledCard sx={{ minWidth: 275 }} elevation={10}>
      <CardActionArea>
      <Fade direction="down" duration={2000}>
      <CardMedia 
      component="img"
      height="150"
      image={image}/>
      </Fade>
      <Fade direction="up" cascade damping={0.2}>
      <CardHeader title={title} />

      <CardContent>{content}</CardContent>
      </Fade>
      </CardActionArea>
    </StyledCard>
  
  );
};

export default CardComponent;