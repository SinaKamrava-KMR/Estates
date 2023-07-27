import { Box, styled } from "@mui/material";

import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Housevitrin } from "./HouseVitrin";

const Wrapper = styled(Box)({
  alignItems:"center",
  display: "flex",
  justifyContent: "space-between",
  height: "100%",
});
const Content = styled(Box)({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: 40,
  paddingLeft: 10,
});
const Title = styled("h1")({
  color: "#282835",
  fontSize: 75,
  fontWeight: "500",
});
const SpecilWord = styled("span")({
  color: "#f85ea6",
});
const Text = styled("p")({
  color: "#868686",
  fontWeight: "500",
  fontSize: 20,
});
const GetStartBtn = styled("button")({
  color: "#ffffff",
  fontWeight: "500",
  fontSize: 20,
  border: 0,
  outline: 0,
  padding: 10,
  borderRadius: 5,
  width: 200,
  cursor: "pointer",
  backgroundColor: "#181626",
  boxShadow: "0 2px 10px #696969",
  "&:active": {
    boxShadow: "0 2px 10px #d8d8d8",
  },
});

function HomePage() {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <Content>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 2 }}
        >
          <SpecilWord
            sx={{
              fontSize: 20,
              marginBottom: 2,
              fontWeight: "bold",
              display: "block",
            }}
          >
            No Worries ✨
          </SpecilWord>
          <Title>
            Easy Way To Find a <SpecilWord>Perfect</SpecilWord> Property
            <SpecilWord>.</SpecilWord>
          </Title>
        </motion.div>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 2, delay: 0.8 }}
        >
          <Text>
            A great platform to buy ,sell,or even rent your properties without
            any commisions.
          </Text>
        </motion.div>

        <GetStartBtn
          onClick={()=>navigate("/rent")}
          as={motion.button}
          initial={{
            opacity: 0,
          }}
          animate={{ opacity: 1 }}
          transition={{
            duration: .8,
            delay: 1.5,
          }}
        >
          Get Start
        </GetStartBtn>
      </Content>
      <Housevitrin />
    </Wrapper>
  );
}

export default HomePage;
