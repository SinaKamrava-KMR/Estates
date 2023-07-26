import { Box, Typography } from "@mui/material";

type LogoType = {
  size?: number;
};

function Logo({ size = 26 }: LogoType) {
  return (
    <Box  sx={{ display: "flex", alignItems: "center" }}>
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
        Estates
      </Typography>
    </Box>
  );
}

export default Logo;
