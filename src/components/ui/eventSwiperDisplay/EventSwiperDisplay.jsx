import { Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import AppCard from "../AppCard/AppCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef, useState } from "react";
import style from "./style.module.css";
import EventSwiperButtons from "../eventSwiperButton/EventSwiperButton";
import propType from "prop-types";
import { constant } from "../../../data/constant";

EventSwiperDisplay.propTypes = {
  variants: propType.string,
};

export default function EventSwiperDisplay({ variants }) {
  const { eventDummy } = constant;
  const swiperRef = useRef(null);
  const [isHover, setHover] = useState(false);
  const slideNext = () => {
    const swiper = swiperRef.current.swiper;
    if (swiper.isEnd) {
      return;
    }
    swiperRef.current.swiper.slideNext();
  };
  const slidePrev = () => {
    const swiper = swiperRef.current.swiper;
    if (swiper.isBeginning) {
      return;
    }
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <Box
      className={style.container}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <Swiper
        autoHeight={true}
        spaceBetween={variants === "eventForYou" ? 20 : 0}
        slidesPerView={variants === "eventForYou" ? 4 : 1}
        className="mySwiper"
        ref={swiperRef}
        speed={400}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        {eventDummy.map((item, index) => {
          return (
            <SwiperSlide key={index} className={style.swiperContainer}>
              {variants === "eventForYou" ? (
                <AppCard
                  eventName={item.eventName}
                  eventDate={item.eventDate}
                  eventLocation={item.eventLocation}
                  eventPicture={item.eventImages}
                  eventPrice={item.evenPrice}
                />
              ) : (
                <Image className={style.bannerImage} src={item.eventImages} />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <EventSwiperButtons
        variants={"right"}
        onclick={slideNext}
        isHover={isHover}
      />
      <EventSwiperButtons
        variants={"left"}
        onclick={slidePrev}
        isHover={isHover}
      />
    </Box>
  );
}
