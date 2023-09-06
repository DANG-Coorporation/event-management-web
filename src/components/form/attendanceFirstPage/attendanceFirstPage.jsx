import React from "react";
import {
  ChakraBaseProvider,
  HStack,
  VStack,
  Image,
  Box,
  Spacer,
  List,
  ListItem,
  ListIcon,
  Heading,
  Text,
} from "@chakra-ui/react";
import { CalendarIcon, AtSignIcon, TimeIcon } from "@chakra-ui/icons";
import { Tabstiket } from "../../ui/tabsTicket/tabsTiket";
import style from "./style.module.css";
import EventSwiperDisplay from "../../ui/eventSwiperDisplay/EventSwiperDisplay";
import { useEffect } from "react";
import { getEvents } from "../../../app/features/eventFetching/eventFetchSlicer";
import { useDispatch, useSelector } from "react-redux";

export default function Attendancefirstpage() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.eventFetch.loading);
    const eventList = useSelector((state) => state.eventFetch.events);
  
    useEffect(() => {
      dispatch(getEvents());
    }, []);

  return (

      <VStack maxWidth="100%" maxHeight="100%" spacing="10px"  paddingLeft='5%' paddingRight='5%'>
        <Spacer />
        <Box>
          <Image
            src="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230823110754.jpg"
            alt="event-banner"
          />
        </Box>
        <Box borderWidth="1px" borderRadius="md" padding="4">
          <List
            spacing="1%"
            fontSize={{ base: "12px", md: "16px", lg: "16px" }}
          >
            <Heading
              fontSize={{ base: "12px", md: "24px", lg: "24px" }}
              fontWeight="bold"
            >
              2023 ASIA FAN MEETING IN JAKARTA: KIMBUM (Between U and Me)
            </Heading>
            <ListItem span="2">
              <ListIcon as={CalendarIcon} color="blue.500" marginRight="3%" />
              03 Sep 2023
            </ListItem>
            <ListItem>
              <ListIcon as={TimeIcon} color="blue.500" marginRight="3%" />
              19:00 - 22:00 WIB
            </ListItem>
            <ListItem>
              <ListIcon as={AtSignIcon} color="blue.500" marginRight="3%" />
              Grand Ballroom - Kempinski Hotel, DKI Jakarta
            </ListItem>
          </List>
        </Box>
        <Tabstiket/>
        <Text className={style.heading}>
        POPULER DI DEKATMU
        </Text>
        <EventSwiperDisplay variants={"eventForYou"} eventList={eventList} />
        <Spacer/>
      </VStack>
  );
}
