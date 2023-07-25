import { styled } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import Search from "../common/Search";
import { Form } from "react-router-dom";
import SelectBox from "../common/SelectBox";
import TopLine from "./TopLine";

const Wrapper = styled(Box)({
  minHeight: "750px",
  overflowY: "scroll",
  position: "relative",
});

const FormWrapper = styled(Form)({
  minHeight: 100,
  paddingInline: 10,
  display: "flex",
  gap: 1,
  alignItems: "center",
});
const Flex1 = styled("span")({
  flex: 1,
});

function RentHouses() {
  return (
    <Wrapper>
      <TopLine />
      <FormWrapper>
        <Search />
        <Flex1 />
        <SelectBox label="Date" delay={0.2} />
        <SelectBox label="Luxury" delay={0.1} />
        <SelectBox label="Location" />
      </FormWrapper>
    </Wrapper>
  );
}

export function action() {
  
}

export default RentHouses;
