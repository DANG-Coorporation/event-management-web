import { VStack, Grid, GridItem } from "@chakra-ui/react";
import style from "./style.module.css";
import AppCard from "../../ui/AppCard/AppCard";
import { constant } from "../../../data/constant";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchEventByQuery } from "../../../app/features/eventDetail/eventDetailSlicer";
import LoadingUI from "../../ui/loading/LoadingUI";
import { convertDateTimeFormat } from "../../../utils/dateHelper";
import {
  convertNumberToCurrency,
  getLowestPrice,
} from "../../../utils/currency";
import configTime from "../../../data/configTime";
import useQuery from "../../../utils/query";
import { Link } from "react-router-dom";
export default function DiscoveryEventDisplay() {
  const dispatch = useDispatch();
  const discoveries = useSelector((state) => state.detailEvent.discovery);
  const query = useQuery();

  useEffect(() => {
    dispatch(fetchEventByQuery(query.get("q")));
  }, [dispatch, query]);

  return (
    <VStack className={style.eventDisplayContainer} height={"100%"}>
      <Grid className={style.gridDisplay}>
        {discoveries.length > 0 ? (
          discoveries.map((item, index) => {
            return (
              <Link to={`/event/${item.uniqId}`} key={index}>
                <GridItem key={index}>
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
                </GridItem>
              </Link>
            );
          })
        ) : (
          <LoadingUI />
        )}
      </Grid>
    </VStack>
  );
}
