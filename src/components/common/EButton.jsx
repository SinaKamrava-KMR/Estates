import { Button } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const ButtonStyle = styled(Button)({
  backgroundColor: "#fff",
  color: "#161619",
  boxShadow:"0 0 5px #e2e2e2",
  display: "flex",
  alignItems: "center",
  gap: 15,
  paddingBlock: 10,
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#fefefe",
    boxShadow:"0 0 5px #dadada",
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
