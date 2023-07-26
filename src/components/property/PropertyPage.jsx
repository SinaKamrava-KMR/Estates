import { motion } from "framer-motion";
import { useState } from "react";
import { styled } from "styled-components";
import GamesIcon from "@mui/icons-material/Games";
import { createPortal } from "react-dom";
import SliderModal from "../Slider/SliderModal";
import RateBox from "../common/RateBox";
import AddLocationIcon from "@mui/icons-material/AddLocation";
const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 500px 300px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 300px 500px 300px;
  }
`;
const SliderWrapper = styled.div`
  grid-row: span 1;
  grid-column: span 3;
  position: relative;
  @media (max-width: 900px) {
    grid-row: span 1;
    grid-column: span 1;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  grid-column: span 2;
  @media (max-width: 900px) {
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
  @media (max-width: 900px) {
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
  @media (max-width: 900px) {
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
  @media (max-width: 900px) {
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
  & > :first-child {
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

const Title = styled.h1`
  color: #1c1c1c;
  @media (max-width: 900px) {
    font-size: 20px;
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  font-size: 15px;
  color: "#6d6d6d";
`;
const DescriptionWrapper = styled.p`
  font-size: 18px;
  color: "#252525";
  line-height: 1.4;
`;
const MediaWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 10px;
`;

const MediaImage = styled.img`
  max-width: 170px;
  height: 90px;
  flex: 1;
  border-radius: 10px;
  transition: all 0.1s ease-in;
  &:active {
    scale: 0.8;
  }
`;

function PropertyPage() {
  const [showSlider, setShowSlider] = useState(false);
  const [currentSrc, setCurentSrc] = useState("/src/assets/images/r2.jpg");
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
          <img src={currentSrc} alt="house" />
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

      <ContentWrapper>
        <TitleWrapper>
          <Title>Cosy apartment for rent</Title>
          <RateBox />
        </TitleWrapper>

        <LocationWrapper>
          <AddLocationIcon style={{ color: "#6d6d6d" }} />
          <p>Mazandaran ramsar 23</p>
        </LocationWrapper>

        <DescriptionWrapper>
          For residents in South Africa looking for an affordable place to call
          home; allow us to introduce the new modular style homes. Welcome to
          our Net-Zero Affordable Housing Extended Stay Rental Community. The
          rentals will be located in Pietersburg, South Africa and we advise you
          to reserve your suite today, starting at only 100 South African Rand
          per week with utilities included. But hurry before the price increases
          assigned parking.
        </DescriptionWrapper>

        <MediaWrapper>
          <MediaImage
            onClick={(e) => setCurentSrc(e.target.src)}
            src="/src/assets/images/r3.jpg"
          />
          <MediaImage
            onClick={(e) => setCurentSrc(e.target.src)}
            src="/src/assets/images/r1.jpg"
          />
          <MediaImage
            onClick={(e) => setCurentSrc(e.target.src)}
            src="/src/assets/images/r2.jpg"
          />
          <MediaImage
            onClick={(e) => setCurentSrc(e.target.src)}
            src="/src/assets/images/r3.jpg"
          />
        </MediaWrapper>
      </ContentWrapper>

      <SideBarWrapper>Side Bar</SideBarWrapper>
    </Wrapper>
  );
}

export default PropertyPage;
