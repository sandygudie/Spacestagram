import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Grid,
  Box,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

function DisplayItem({ items }) {
  const [like, setLike] = useState(true);

  const { date, url, title, explanation } = items;
  var newdate = new Date(date).toDateString();

  const useStyles = makeStyles((theme) => ({
    root: {
      width: 350,
      margin: "auto",
      position: "relative",
      boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    },
    overlay: {
      position: "absolute",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      height: "100%",
      width: "100%",
      opacity: "0",
      transition: ".5s ease",
      backgroundColor: "#008CBA",
      "&:hover": {
        opacity: "1",
      },
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    content: {
      color: "white",
      fontSize: "12px",
      position: "absolute",
      top: "45%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "90%",
      textAlign: "justify",
      height: "70%",
      overflow: "auto",
      lineHeight: "2",
      padding: "0em 1em",
    },
    footer: {
      justifyContent: "space-between",
    },
  }));

  const classes = useStyles();

  const Likehandler = () => {
    setLike(!like);
  };

 

  

  return (
    <Grid item xs={12} sm={4}>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={url} title={title} />
        <CardContent className={classes.overlay}>
          <Box className={classes.content}>
            <Typography style={{ fontWeight: 'bold' }}
              gutterBottom
              variant="subtitle2"
              align="center"
             
            >
              {title}
            </Typography>
            <Typography variant="body2" component="p">
              {explanation}
            </Typography>
          </Box>
        </CardContent>

        <CardActions className={classes.footer}>
          <Box align="left" color>
            <Typography sx={{ fontSize: 11.5,fontweight:'bold' }} variant="subtitle2">
              {title}
            </Typography>
            <Typography style={{ fontSize: 11 }} variant="subtitle2">
              {newdate}
            </Typography>
          </Box>

          {like ? (
            <IconButton onClick={Likehandler} aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          ) : (
            <IconButton aria-label="add to favorites" onClick={Likehandler}>
              <FavoriteIcon color="secondary" />
            </IconButton>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}

export default DisplayItem;
