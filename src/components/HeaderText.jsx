import { Box, Typography } from "@mui/material";
import React from "react";
import { Fade } from "react-reveal";

export const HeaderText = ({ text }) => {
  return (
      <Box sx={{ textAlign: "center", padding: "20px 0" }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: 32,
            fontWeight: 900,
            // marginBottom: 2,
            paddingBottom: 2,
            color: "#012970",
            position: "relative",
            "&:after": {
              content: '""',
              position: "absolute",
              display: "block",
              width: "60px",
              height: "4px",
              background: "#4154f1",
              left: "0",
              right: "0",
              bottom: "0",
              top: "30px",
              margin: "auto"
            }
          }}
        >
          {text}
        </Typography>
      </Box>
  );
};
