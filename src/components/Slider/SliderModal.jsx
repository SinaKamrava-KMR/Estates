import { motion } from "framer-motion";
import { styled } from "styled-components";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CloseIcon from "@mui/icons-material/Close";
import "swiper/css";
import "./swiper.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  background-color: #111111de;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3000;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;
const CloseIconWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  color: #ffffff;
  z-index: 4000;
  cursor: pointer;
`;

function SliderModal({ handleClose }) {
  return (
    <Wrapper as={motion.div} initial={{ scale: 0.7 }} animate={{ scale: 1 }}>
      <CloseIconWrapper onClick={handleClose}>
        <CloseIcon sx={{ fontSize: 30 }} />
      </CloseIconWrapper>
      <Swiper
        style={{ borderRadius: "10px", width: "90%", height: "600px" }}
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Image src="/src/assets/images/r3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/src/assets/images/r1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/src/assets/images/r2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/src/assets/images/h1.jpg" />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
}

export default SliderModal;
