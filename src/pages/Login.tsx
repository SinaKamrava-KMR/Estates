import {
  Container,
  Box,
  FormControl,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { styled } from "@mui/system";
import Animation from "../components/login/Animation";
import Logo from "../components/common/Logo";
import TextField from "@mui/material/TextField";

const RightBox = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  minWidth: 500,
  flex: 1,
  overflow: "hidden",
});

const LeftBox = styled(Box)({
  padding: 8,
  minWidth: 450,
  borderRadius: 10,
  overflow: "hidden",
  display: "flex",

  flexDirection: "column",
  gap: 30,
});
const InputsWrapper = styled(Box)({
  display: "flex",
  gap: 8,
});
function Login() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "95vh",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <LeftBox>
        <Logo />

        <Typography variant="body1" sx={{ fontSize: 30, color: "#2f2e34" }}>
          Wellcome to The Estates
        </Typography>

        {/* =========================Form================================= */}
        <FormControl
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            height: "65%",
          }}
        >
          <InputsWrapper>
            <TextField label="Name" />
            <TextField label="Last Name" />
          </InputsWrapper>
          <TextField label="Email" />
          <TextField label="Password" />
          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
          />
          <Box sx={{ flex: 1 }} />
          <Button variant="contained" sx={{ paddingBlock: 2 }}>
            Login
          </Button>
        </FormControl>
        {/* ============================================================= */}
      </LeftBox>
      <RightBox>
        <Animation />
      </RightBox>
    </Container>
  );
}

export default Login;
