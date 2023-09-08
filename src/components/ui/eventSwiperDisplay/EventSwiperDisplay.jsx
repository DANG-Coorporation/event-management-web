import { Box, Image } from "@chakra-ui/react";
import propType from "prop-types";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import configTime from "../../../data/configTime";
import { constant } from "../../../data/constant";
import {
  convertNumberToCurrency,
  getLowestPrice,
} from "../../../utils/currency";
import { convertDateTimeFormat } from "../../../utils/dateHelper";
import AppCard from "../AppCard/AppCard";
import EventSwiperButtons from "../eventSwiperButton/EventSwiperButton";
import style from "./style.module.css";

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
        className='mySwiper'
        ref={swiperRef}
        speed={400}
        autoplay={
          variants === "eventForYou"
            ? false
            : { delay: 2500, disableOnInteraction: true }
        }
        onSlideChange={() => {
          // console.log(swiperRef.current.swiper.isBeginning);
        }}
      >
        {variants === "eventForYou"
          ? eventList.map((item, index) => {
              return (
                <SwiperSlide key={index} className={style.swiperContainer}>
                  {
                    <Link to={`/event/${item.uniqId}`}>
                      <AppCard
                        eventName={item.eventName}
                        eventDate={convertDateTimeFormat(
                          item.eventTime.date.start,
                          configTime.iso_date,
                          configTime.date_month_full_string
                        )}
                        eventLocation={item.address.city.split(",")[0]}
                        eventPicture={item.coverImage}
                        eventPrice={convertNumberToCurrency(
                          getLowestPrice(item.tickets)
                        )}
                      />
                    </Link>
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
