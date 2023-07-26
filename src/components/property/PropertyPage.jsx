import { motion } from "framer-motion";
import { useState } from "react";
import { styled } from "styled-components";
import GamesIcon from "@mui/icons-material/Games";
import { createPortal } from "react-dom";
import SliderModal from "../Slider/SliderModal";
const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 500px 300px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 300px 400px 300px;
  }
`;
const SliderWrapper = styled.div`
  grid-row: span 1;
  grid-column: span 3;
  position: relative;
  @media (max-width: 800px) {
    grid-row: span 1;
    grid-column: span 1;
  }
`;
const ContentWrapper = styled.div`
  background-color: #69c8ff;
  grid-column: span 2;
  @media (max-width: 800px) {
    grid-column: span 1;
  }
`;
const SideBarWrapper = styled.div`
  background-color: #84fc9a;
  grid-column: span 1;
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TagContent = styled.p`
  position: absolute;
  bottom: 20px;
  left: 15px;
  font-size: 35px;
  color: white;
  background-color: #11111166;
  padding: 10px 20px;
  border-radius: 5px;
  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

const ShowSliderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  right: 15px;
  background: url("/src/assets/images/h1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  width: 200px;
  height: 120px;
  @media (max-width: 800px) {
    width: 120px;
    height: 80px;
    border-radius: 10px;
  }
`;
const ShowSliderContents = styled.div`
  backdrop-filter: blur(8px);
  width: 100%;
  height: 100%;
`;
const SliderText = styled.p`
  position: absolute;
  color: white;
  font-size: 20px;
  width: 100px;
  text-align: center;
  @media (max-width: 800px) {
    font-size: 16px;
  }
`;

const IconWrapper = styled.div`
  color: #363535;
  background-color: white;
  position: absolute;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  top: 20px;
  left: 15px;
  &>:first-child{
    transform: rotate(45deg);
  }
`;

const IconToastBox = styled.div`
  position: absolute;
  background-color: #ffffff;
  width: 190px;
  height: 50px;
  left: 60px;
  bottom: -70px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  text-align: center;
  line-height: 1.4;
  line-clamp: 2;
  &::before {
    position: absolute;
    background-color: white;
    content: "";
    left: -40px;
    top: -38px;
    display: block;
    width: 100px;
    height: 80px;
    clip-path: polygon(25% 25%, 52% 48%, 44.5% 55.5%, 42.13% 57.88%);
  }
`;

function PropertyPage() {
  const [showSlider, setShowSlider] = useState(false);

  return (
    <Wrapper>
      {showSlider &&
        createPortal(
          <SliderModal handleClose={() => setShowSlider((s) => !s)} />,
          document.body
        )}
      <SliderWrapper
        as={motion.div}
        initial={{ filter: "blur(20px)" }}
        animate={{ filter: "blur(0)" }}
        transition={{ duration: 1 }}
      >
        <ImageWrapper>
          <img src="/src/assets/images/r2.jpg" alt="house" />
        </ImageWrapper>
        <TagContent>Living Room</TagContent>

        <ShowSliderWrapper onClick={() => setShowSlider((s) => !s)}>
          <ShowSliderContents></ShowSliderContents>
          <SliderText>View all 16 photos</SliderText>
        </ShowSliderWrapper>

        <IconWrapper>
          <GamesIcon />
          <IconToastBox
            as={motion.div}
            initial={{ width: 0, overflow: "hidden" }}
            animate={{
              width: "190px",
              overflow: "visible",
            }}
            transition={{ delay: 2 }}
          >
            <p>for get more info click and contact with us</p>
          </IconToastBox>
        </IconWrapper>
      </SliderWrapper>

      <ContentWrapper>content</ContentWrapper>

      <SideBarWrapper>Side Bar</SideBarWrapper>
    </Wrapper>
  );
}

export default PropertyPage;
