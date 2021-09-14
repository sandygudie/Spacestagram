import React from "react";
import { Typography, Box } from "@material-ui/core";

function DisplayText() {
  return (
    <Box m={6} >
      <Typography  style={{ color: '#008CBA' }}  gutterBottom variant="h5" align="center">
        NASA'S ASTRONOMY PHOTO OF THE DAY API
      </Typography>
    </Box>
  );
}

export default DisplayText;
