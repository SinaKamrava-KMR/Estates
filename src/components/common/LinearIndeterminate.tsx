import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const LoadingWrapper = styled(Box)({
  width: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
});
const BackDrop = styled(Box)({
  position: "fixed",
  inset: 0,
  backgroundColor: "#2222222a",
});

export default function LinearIndeterminate() {
  return (
    <LoadingWrapper>
      <BackDrop />
      <LinearProgress />
    </LoadingWrapper>
  );
}
