import { AtSignIcon, CalendarIcon, TimeIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchEventById } from "../../../app/features/eventDetail/eventDetailSlicer";
import { getEvents } from "../../../app/features/eventFetching/eventFetchSlicer";
import configTime from "../../../data/configTime";
import LoadingPage from "../../../pages/loading/loadingPage";
import { convertDateTimeFormat } from "../../../utils/dateHelper";
import EventSwiperDisplay from "../../ui/eventSwiperDisplay/EventSwiperDisplay";
import { Tabstiket } from "../../ui/tabsTicket/tabsTiket";
import style from "./style.module.css";

export default function Attendancefirstpage() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.eventFetch.loading);
  const eventList = useSelector((state) => state.eventFetch.events);
  const detailEvent = useSelector((state) => state.detailEvent);
  const [detail, setDetail] = useState({});
  // const [eventTime, setEventTime] = useState({});
  const [datePeriod, setDatePeriod] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const { id } = useParams();
  // console.log("debug-detail", detailEvent);
  useEffect(() => {
    dispatch(fetchEventById(id));
    dispatch(getEvents());
  }, [dispatch, id]);

  const convertDate = (date) => {
    return convertDateTimeFormat(
      date,
      configTime.iso_date,
      configTime.date_month_full_string
    );
  };
  useEffect(() => {
    if (detailEvent.pageDetail) {
      setDetail(detailEvent.pageDetail);
      const eventTime = detailEvent.pageDetail.eventTime;

      if (eventTime) {
        const dateStart = eventTime.date?.start;
        const dateEnd = eventTime.date?.end;

        if (dateStart && dateEnd) {
          if (dateStart === dateEnd) {
            setDatePeriod(convertDate(dateStart));
          } else {
            setDatePeriod(
              convertDate(dateStart) + " - " + convertDate(dateEnd)
            );
          }
          setTimePeriod(eventTime.time?.start + " - " + eventTime.time?.end);
        }
      }
    }
  }, [detailEvent]);

  return !detailEvent.loading ? (
    <VStack
      maxWidth='100%'
      maxHeight='100%'
      spacing='10px'
      paddingLeft='5%'
      paddingRight='5%'
    >
      <Spacer />
      <Box
        borderRadius={"10px"}
        width={{ base: "100%", md: "100%", lg: "800px" }}
      >
        <Image
          src={detail.coverImage}
          alt='event-banner'
          border={"1px solid #E2E8F0"}
          borderRadius={"20px"}
        />
      </Box>
      <Box
        borderWidth='1px'
        borderRadius='md'
        width={{ base: "100%", md: "100%", lg: "800px" }}
        padding={"10px"}
      >
        <List
          spacing='1%'
          fontSize={{ base: "12px", md: "16px", lg: "16px" }}
          width={"100%"}
        >
          <Heading
            fontSize={{ base: "12px", md: "24px", lg: "24px" }}
            fontWeight='bold'
          >
            {detail.eventName}
          </Heading>
          <ListItem span='2'>
            <ListIcon as={CalendarIcon} color='blue.500' marginRight='3%' />
            {datePeriod ? datePeriod : ""}
          </ListItem>
          <ListItem>
            <ListIcon as={TimeIcon} color='blue.500' marginRight='3%' />
            {timePeriod ? timePeriod : ""}
          </ListItem>
          <ListItem>
            <ListIcon as={AtSignIcon} color='blue.500' marginRight='3%' />
            {detail.address && detail.address.placeName
              ? detail.address.placeName.split(",")[0] +
                "  |  " +
                detail.address.city.split(",")[0]
              : ""}
          </ListItem>
        </List>
      </Box>
      <Tabstiket
        description={detail.eventDescription ?? ""}
        termCondition={detail.termAndCondition ?? ""}
      />
      <Text className={style.heading}>POPULER DI DEKATMU</Text>
      <EventSwiperDisplay variants={"eventForYou"} eventList={eventList} />
      <Spacer />
    </VStack>
  ) : (
    <LoadingPage />
  );
}
