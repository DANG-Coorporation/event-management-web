import {
  Divider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import TicketDetailPage from "../ticket/ticketDetailPage";
export function Tabstiket({ description, termCondition }) {
  const renderHTML = (html) => {
    return { __html: html };
  };
  const detailEvent = useSelector((state) => state.detailEvent.pageDetail);

  return (
    <Tabs
      variant='enclosed'
      colorScheme='white'
      size='lg'
      width={"100%"}
      maxWidth={{
        base: "100%", // 0-48em
        md: "100%", // 48em-80em,
        lg: "800px", // 80em+
      }}
    >
      <TabList w='100%' alignContent={"center"}>
        <Tab _selected={{ color: "white", bg: "blue.500" }} w='50%'>
          {" "}
          Deskripsi
        </Tab>
        <Tab _selected={{ color: "white", bg: "blue.500" }} w='50%'>
          Tiket
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel w='100%' p='30px'>
          <VStack>
            <Text fontSize='lg' fontWeight='bold'>
              Deskripsi
            </Text>
            {detailEvent.eventDescription && (
              <div
                dangerouslySetInnerHTML={renderHTML(
                  detailEvent.eventDescription
                )}
              />
            )}
            <Divider />
            {detailEvent.isTermAndCondition && (
              <>
                {" "}
                <Text fontSize='lg' fontWeight='bold'>
                  Syarat & Ketentuan
                </Text>
                {detailEvent.termAndCondition && (
                  <div
                    dangerouslySetInnerHTML={renderHTML(
                      detailEvent.termAndCondition
                    )}
                  />
                )}
              </>
            )}
          </VStack>
        </TabPanel>
        <TabPanel w='100%'>
          <VStack>
            {detailEvent.tickets ? (
              detailEvent.tickets.map((ticket, index) => (
                <TicketDetailPage
                  name={ticket.name}
                  desc={ticket.description}
                  price={ticket.price}
                  quota={ticket.quota}
                  key={index}
                  type={ticket.ticketType}
                  startTime={ticket.sellPeriod.start}
                  endTime={ticket.sellPeriod.end}
                />
              ))
            ) : (
              <Text fontSize='lg' fontWeight='bold'>
                Tiket tidak tersedia
              </Text>
            )}
          </VStack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
