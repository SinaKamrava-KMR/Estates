import { Alert, Box, Snackbar, styled } from "@mui/material";
import { motion } from "framer-motion";

type ToastType = {
  open: boolean;
  handleClose(): void;
  msg: string;
  severity: "error" | "success" | "info" | "warning"|undefined ;
};

const Wrapper = styled(Box)({
  position: "fixed",
  bottom: 10,
  right: 10,
}) as typeof Box;

function Toast({ open, msg, severity, handleClose }: ToastType) {
  return (
    <Wrapper
      component={motion.div}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert variant="filled" onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {msg}
        </Alert>
      </Snackbar>
    </Wrapper>
  );
}

export default Toast;
