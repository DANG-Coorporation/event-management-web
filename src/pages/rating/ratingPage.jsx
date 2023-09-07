import { Box, HStack, Image, VStack } from "@chakra-ui/react";
import style from "./style.module.css";
import RatingSection from "../../components/form/ratingSection/ratingSection";
import ReviewSection from "../../components/form/reviewSection/reviewSection";
import RatingCard from "../../components/ui/ratingCard/ratingCard";
import dummyImage from "../../assets/banner.jpg";
import RatingDetailInfo from "../../components/ui/ratingDetailInfo/ratingDetailInfo";

export default function RatingPage() {
  return (
    <VStack className={style.container} spacing={"2rem"}>
      <RatingCard w={"100%"} height="100%">
        <HStack h="100%">
          <Box w={"320px"} height={"180px"} bg={"black"}>
            <Image
              src={dummyImage}
              objectFit={"contain"}
              w={"100%"}
              h={"100%"}
            />
          </Box>
          <RatingDetailInfo />
        </HStack>
      </RatingCard>
      <RatingSection />
      <ReviewSection />
    </VStack>
  );
}
