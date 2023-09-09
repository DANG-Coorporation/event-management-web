import React from "react";
import {
  Button,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  
} from "@chakra-ui/react";
import TicketSelection from "../../form/ticketSelectionTable/ticketSelectionTable";
import SyaratKetentuan from "../syaratKetentuanTiket/syaratKetentuan";
export function Tabstiket() {
  return (
    <Tabs variant="enclosed"
      colorScheme="white"
      size="lg"
      width='80%'
      paddingLeft='10%'
      paddingRight='10%'
    >
      <TabList w='100%' alignContent={"center"}>
        <Tab _selected={{color: 'white', bg:'blue.500'}} w='50%'> Deskripsi</Tab>
        <Tab _selected={{color: 'white', bg:'blue.500'}} w='50%'>Tiket</Tab>
      </TabList>
      <TabPanels>
        <TabPanel w='100%' p='10%'>
          <p>
            Viu Scream Dates is an annual Viu festival event in Indonesia,
            bringing the Viu experience to live to our millions of Viu’ers in
            Indonesia. The initial Viu Scream Dates was done in Bangkok,
            Thailand, in 2019 and was attended by thousands of Viu’ers. The Viu
            Scream Dates 2023 will be the first Viu Scream Dates in Indonesia,
            where we will create the excitement by bringing the most favorite
            Korean, Thailand, Mandarin, & Indonesia celebrties to life through
            music concerts, meet & greets, photo signings, talk-shows,
            screenings, and fun games. On the 3rd of September Viu Scream Dates
            will bring the star of Boys Before Flower, Ghost Doctor, and Tale of
            The Nine Tailed, Kim Bum for his 2023 ASIAN FAN MEET TOUR in
            Jakarta: Between U and Me - To Create Memorable Memories.
            </p>
            <br/>
          {/* <Button
            bg="blue.500"
            padding="2"
            borderRadius="4"
            fontWeight="bold"
            textColor="white"
          >
            {" "}
            Syarat & Ketentuan{" "}
          </Button> */}
        <SyaratKetentuan/>
        </TabPanel>
        <TabPanel w='100%'>
          <TicketSelection/>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
