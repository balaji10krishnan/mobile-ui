import { Button } from "@mui/material";
import React from "react";

export const CusButton = (props) => {
  const { text, link } = props;
  return (
    <Button
      sx={{
        width: "100%",
        background: "#4154f1",
        padding: "8px 20px",
        fontWeight: 700,
        borderRadius: "4px",
        color: "#fff",
        textTransform: 'capitalize',
        "&:hover, &:focus": {
          color: "#fff",
          background: "#5969f3"
        }
      }}
      href={link}
    >
      {text}
    </Button>
  );
};
