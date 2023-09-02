import { Button } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import AppCard from "../../ui/AppCard/AppCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import style from "./style.module.css";

export default function EventForYou() {
  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        navigation={true}
      >
        <SwiperSlide>
          <AppCard />
        </SwiperSlide>
        <SwiperSlide>
          <AppCard />
        </SwiperSlide>
        <SwiperSlide>
          <AppCard />
        </SwiperSlide>
        <SwiperSlide>
          <AppCard />
        </SwiperSlide>
        <SwiperSlide>
          <AppCard />
        </SwiperSlide>
      </Swiper>
      <Button>Click</Button>
    </>
  );
}
