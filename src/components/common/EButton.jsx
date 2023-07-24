import { Button } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const ButtonStyle = styled(Button)({
  backgroundColor: "#fff",
  color: "#161619",
  display: "flex",
  alignItems: "center",
  gap: 15,
  paddingBlock: 10,
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#e9e9e9",
  },
});

function EButton({ children, onClick }) {
  return (
    <ButtonStyle onClick={onClick} variant="contained">
      {children}
    </ButtonStyle>
  );
}

export default EButton;
