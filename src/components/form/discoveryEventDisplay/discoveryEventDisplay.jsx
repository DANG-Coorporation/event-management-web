import { VStack, Grid, GridItem } from "@chakra-ui/react";
import style from "./style.module.css";
import AppCard from "../../ui/AppCard/AppCard";
import { constant } from "../../../data/constant";

export default function DiscoveryEventDisplay() {
  const { eventDummy } = constant;
  return (
    <VStack className={style.eventDisplayContainer}>
      <Grid className={style.gridDisplay}>
        {eventDummy.map((item, index) => {
          return (
            <GridItem key={index}>
              <AppCard
                eventName={item.eventName}
                eventDate={item.eventDate}
                eventLocation={item.eventLocation}
                eventPicture={item.eventImages}
                eventPrice={item.evenPrice.toLocaleString()}
              />
            </GridItem>
          );
        })}
      </Grid>
    </VStack>
  );
}
