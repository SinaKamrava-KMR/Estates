import {
  Container,
  Box,
  FormControl,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { styled } from "@mui/system";
import Animation from "../components/common/Animation";
import Logo from "../components/common/Logo";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import LinearIndeterminate from "../components/common/LinearIndeterminate";
import Toast from "../components/common/Toast";
import { useSelector, useDispatch } from "react-redux";
import { closeToast ,authUser} from "../redux/reducers/user/userSlice";

//  styled
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

const LoginContainer = styled(Container)({
  height: "95vh",
  display: "flex",
  flexWrap: "wrap",
});
const LoginForm = styled(FormControl)({
  display: "flex",
  flexDirection: "column",
  gap: 15,
  height: "65%",
});



//component
function Login() {
  const { openToast, isLoading, message, severity } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSub = (data) => {
    dispatch(authUser(data.email, data.password));
  };

  useEffect(() => {
    if (severity !== "success") return;
    const id = setTimeout(() => {
      navigate("/", { replace: true });
    }, 2000);

    return () => clearTimeout(id);
  }, [severity, navigate]);

  return (
    <LoginContainer maxWidth="lg">
      {isLoading && createPortal(<LinearIndeterminate />, document.body)}
      {createPortal(
        <Toast
          open={openToast}
          msg={message}
          severity={severity}
          handleClose={() => dispatch(closeToast())}
        />,
        document.body
      )}
      <LeftBox>
        <Logo />
        <Typography variant="body1" sx={{ fontSize: 30, color: "#2f2e34" }}>
          Wellcome to The Estates
        </Typography>

        {/* =========================Form================================= */}
        <LoginForm>
          <InputsWrapper>
            <TextField
              label="Name"
              {...register("firstName", {
                required: {
                  value: true,
                  message: "Your name can't be empty",
                },
              })}
              error={Boolean(errors.firstName)}
              helperText={errors.firstName ? errors.firstName.message : ""}
            />

            <TextField
              label="Last Name"
              {...register("lastName", {
                required: {
                  value: true,
                  message: "Your last Name can't be empty",
                },
                maxLength: {
                  value: 10,
                  message: "last name is too long",
                },
              })}
              error={Boolean(errors.lastName)}
              helperText={errors.lastName ? errors.lastName.message : ""}
            />
          </InputsWrapper>
          <TextField
            type="email"
            label="Email"
            {...register("email", {
              required: {
                value: true,
                message: "email can't be empty",
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "email not valid",
              },
            })}
            error={Boolean(errors.email)}
            helperText={errors.email ? errors.email.message : ""}
          />
          <TextField
            type="password"
            label="Password"
            {...register("password", {
              required: {
                value: true,
                message: "password can't be empty",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "password not valid  must contain at least one special character",
              },
            })}
            error={Boolean(errors.password)}
            helperText={errors.password ? errors.password.message : ""}
          />
          <FormControlLabel control={<Checkbox />} label="Remember me" />
          <Box sx={{ flex: 1 }} />
          <Button
            type="submit"
            variant="contained"
            sx={{ paddingBlock: 2 }}
            onClick={handleSubmit(onSub)}
          >
            Login
          </Button>
        </LoginForm>
        {/* ============================================================= */}
      </LeftBox>
      <RightBox>
        <Animation />
      </RightBox>
    </LoginContainer>
  );
}

export default Login;
