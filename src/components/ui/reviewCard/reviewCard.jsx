import { HStack, Box, VStack, Text } from "@chakra-ui/layout";
import style from "./style.module.css";
// import { Avatar } from "@chakra-ui/avatar";
import { MdPerson } from "react-icons/md";
import StarRatingStatic from "../starRatingStatic/starRatingStatic";
import ReviewLikeDislike from "../reviewLikeDislike/reviewLikeDislike";

export default function ReviewCard() {
  return (
    <Box
      w={"100%"}
      height={"100px"}
      textOverflow={"ellipsis"}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      pr={"1rem"}
    >
      <HStack className={style.container} spacing={"0px"}>
        <Box className={style.avatarContainer} bg={"primary.500"}>
          <MdPerson className={style.avatar} />
        </Box>

        <Box className={style.detailContainer}>
          <VStack
            h={"100%"}
            display={"flex"}
            flexDir={"column"}
            justify={"center"}
          >
            <Text as={"span"} className={style.name}>
              John Doe
            </Text>
            <Box display={"flex"} flexDir={"column"}>
              <Text as={"span"} className={style.date}>
                9 Oktober 2023
              </Text>
              <Text as={"span"} className={style.elapsedTime}>
                1 hari yang lalu
              </Text>
            </Box>
          </VStack>
        </Box>

        <Box className={style.reviews}>
          <VStack h={"100%"}>
            <HStack w={"100%"} justify={"space-between"} align={"start"}>
              <StarRatingStatic stars={2} />
              <ReviewLikeDislike isLiked={false} />
            </HStack>
            <Text className={style.review} as={"span"}>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
              massa egestas mollis varius;
            </Text>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
}
