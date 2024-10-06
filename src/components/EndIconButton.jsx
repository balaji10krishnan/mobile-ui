import { East } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

export const EndIconButton = (props) => {
  const { text, link } = props;
  return (
    <Button
      sx={{
        width: "100%",
        background: "#4154f1",
        padding: "8px 20px",
        fontWeight: 700,
        borderRadius: "4px",
        fontSize: '20px',
        textTransform: "capitalize",
        color: "#fff",
        boxShadow: '0px 5px 30px rgba(65, 84, 241, 0.4)',
        "&:hover, &:focus": {
          color: "#fff",
          background: "#5969f3",
          "& .MuiSvgIcon-root": {
            transform: "translateX(5px)"
          }
        }
      }}
      href={link}
      endIcon={<East />}
    >
      {text}
    </Button>
  );
};
