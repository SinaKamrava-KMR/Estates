import { Box, Typography } from "@mui/material";
import { styled } from "styled-components";
type LogoType = {
  size?: number;
};

const Text = styled.p`
  display: block;
  @media (max-width: 800px) {
    display: none;
  }
`;

function Logo({ size = 26 }: LogoType) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box
        component="img"
        sx={{
          height: 80,
          width: 80,
        }}
        alt="Estates Logo"
        src="/public/logo.png"
      ></Box>

      <Typography variant="body1" sx={{ fontSize: size, fontWeight: "bold" }}>
        <Text>Estates</Text>
      </Typography>
    </Box>
  );
}

export default Logo;
