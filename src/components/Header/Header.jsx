import { Box, styled } from "@mui/system";
import Logo from "../common/Logo";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import EButton from "../common/EButton";
import LoginIcon from "@mui/icons-material/Login";
import { useSelector } from "react-redux";
import Profile from "./Profile";

const HeaderWrapper = styled(Box)({
  position: "sticky",
  top: 0,
  zIndex: 10,
  backgroundColor:"#fff",
  width: "100%",
  height: "65px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
const LinkWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  gap: 50,
  "& p": {
    fontSize: "20px",
  },
});
const Line = styled(motion.div)({
  position: "absolute",
  height: "3px",
  bottom: -3,
  left: 0,
  width: "60px",
  backgroundColor: "#121212",
});

const links = ["About", "Map", "Rent", "Contact"];

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activePosition, setActivePosition] = useState(0);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (location.pathname === "/") return;
    if (location.pathname === "/map") setActivePosition(100);
    if (location.pathname === "/about") setActivePosition(0);
    if (location.pathname === "/rent") setActivePosition(190);
    if (location.pathname === "/contact") setActivePosition(290);
  }, [location.pathname]);

  return (
    <HeaderWrapper>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/">
          <Logo />
        </Link>
      </motion.div>

      <LinkWrapper>
        {links.map((a, idx) => (
          <motion.div
            key={idx}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: `.${idx}` }}
          >
            <Link to={`/${a.toLowerCase()}`}>
              <Typography variant="body1">{a}</Typography>
            </Link>
          </motion.div>
        ))}
        {location.pathname !== "/" && (
          <Line
            initial={{ width: 0, left: activePosition }}
            animate={{ width: 60, left: activePosition }}
            transition={{ duration: 0.5 }}
          />
        )}
      </LinkWrapper>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {user === undefined ? (
          <EButton onClick={() => navigate("/login")}>
            Login
            <LoginIcon />
          </EButton>
        ) : (
          <Profile user={user} />
        )}
      </motion.div>
    </HeaderWrapper>
  );
}

export default Header;
