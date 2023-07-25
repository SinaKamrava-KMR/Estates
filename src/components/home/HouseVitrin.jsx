import { Box, styled } from "@mui/material";
import { motion } from "framer-motion";
import React, { memo } from "react";

const Wrapper = styled(Box)({
  overflow: "hidden",
  borderRadius: 15,
  width: 900,
  height: 500,
});
const Image = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  filter: "brightness(90%)",
});

export const Housevitrin = memo(() => {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 90, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Wrapper>
        <Image src="./src/assets/images/bopp.jpg" />
      </Wrapper>
    </motion.div>
  );
});
