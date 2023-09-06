import { Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import AppCard from "../AppCard/AppCard";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import { useRef, useState } from "react";
import style from "./style.module.css";
import EventSwiperButtons from "../eventSwiperButton/EventSwiperButton";
import propType from "prop-types";
import { constant } from "../../../data/constant";

EventSwiperDisplay.propTypes = {
  variants: propType.string,
  eventList: propType.array,
};

export default function EventSwiperDisplay({ variants, eventList }) {
  //   const { eventDummy } = constant;
  const { bannerDummy } = constant;
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
  SwiperCore.use([Autoplay]);
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
        pagination={variants === "eventForYou" ? false : true}
        modules={variants === "eventForYou" ? [] : [Pagination]}
        loop={variants === "eventForYou" ? false : true}
        className="mySwiper"
        ref={swiperRef}
        speed={400}
        autoplay={
          variants === "eventForYou"
            ? false
            : { delay: 2500, disableOnInteraction: true }
        }
        onSlideChange={() => {
          console.log(swiperRef.current.swiper.isBeginning);
        }}
      >
        {variants === "eventForYou"
          ? eventList.map((item, index) => {
              return (
                <SwiperSlide key={index} className={style.swiperContainer}>
                  {
                    <AppCard
                      eventName={item.eventName}
                      eventDate={item.eventTime.date.start}
                      eventLocation={item.address.city.split(",")[0]}
                      eventPicture={item.coverImage}
                      eventPrice={item.tickets[0].price.toString()}
                    />
                  }
                </SwiperSlide>
              );
            })
          : bannerDummy.map((item, index) => {
              return (
                <SwiperSlide key={index} className={style.swiperContainer}>
                  <Box key={index} className={style.bannerContainer}>
                    <Image src={item} className={style.bannerImage} />
                  </Box>
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
