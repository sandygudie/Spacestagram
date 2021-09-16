import React, { useState, useEffect } from "react";
import DisplayItem from "./DisplayItem";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DisplayText from "./DisplayText";
import CircularProgress from '@mui/material/CircularProgress';
// import Typography from '@mui/material/Typography';



function Display() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_SECRET_NAME}&start_date=2021-08-01`)
      .then((response) => response.json())

      .then((data) => setData(data))

      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading)
  
    return (
      <Typography  style={{ color: '#008CBA' }} gutterBottom variant="h6" align="center">
      <p>  Loading... </p>
       <CircularProgress />
      </Typography>
    //   <Box >
    //   <CircularProgress />
    // </Box>
    );
  if (error)
    return (
      <Typography style={{ color: 'red' }} gutterBottom variant="h6" align="center">
       Error! The page encountered some problems
      </Typography>
    );
  return (
    <>
     <DisplayText />
    <Grid container spacing={3}>
      {data.map((item, i) => {
        return <DisplayItem key={i} items={item} />;
      })}
    </Grid>
    </>
  );
}

export default Display;
