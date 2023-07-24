import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";

import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducers/user/userSlice";
const ImageBox = styled("img")({
  width: 50,
  height: 50,
  borderRadius: "50%",
  objectFit:"cover"
});
const BtnWrapper = styled("div")({
  cursor: "pointer",
  marginLeft:"10px"
});
const Wrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 10,
});

function Profile({ user }) {
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <Typography variant="body1">
        {user.firstName} {user.lastName}
      </Typography>
      <ImageBox src="./src/assets/images/prof.jpg" />

      <BtnWrapper onClick={()=>dispatch(logout())}><LogoutIcon  /></BtnWrapper>
    </Wrapper>
  );
}

export default Profile;
