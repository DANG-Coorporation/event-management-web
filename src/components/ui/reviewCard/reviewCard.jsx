import { HStack, Box, VStack, Text } from "@chakra-ui/layout";
import style from "./style.module.css";
// import { Avatar } from "@chakra-ui/avatar";
import { MdPerson } from "react-icons/md";
import StarRatingStatic from "../starRatingStatic/starRatingStatic";
import ReviewLikeDislike from "../reviewLikeDislike/reviewLikeDislike";
import propType from "prop-types";
import { diffTwoDate } from "../../../utils/dateHelper";

ReviewCard.defaultProps = {
  reviewItem: {
    star: 1,
    user: {
      fullName: "Galih Setyawan",
      username: "manusia",
      email: "scriptgalih@gmail.com",
      id: 1,
    },
    comment: "hei, its great",
    commentTime: {
      date: "2023-09-07",
      time: "13:00",
    },
    isLiked: true,
  },
};

ReviewCard.propTypes = {
  reviewItem: propType.object,
};

export default function ReviewCard({ reviewItem }) {
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
            wordBreak={"break-word"}
            textOverflow={"ellipsis"}
            px={"4px"}
          >
            <Text as={"span"} className={style.name} maxH={"50px"}>
              {reviewItem.user.username}
            </Text>
            <Box display={"flex"} flexDir={"column"}>
              <Text as={"span"} className={style.elapsedTime}>
                {diffTwoDate(
                  new Date().toISOString().split("T")[0],
                  reviewItem.commentTime.date,
                  true
                )}
              </Text>
              <Text
                as={"span"}
                className={style.date}
                textOverflow={"ellipsis"}
                textAlign={"center"}
              >
                {reviewItem.commentTime.time}
              </Text>
            </Box>
          </VStack>
        </Box>

        <Box className={style.reviews}>
          <VStack h={"100%"} wordBreak={"break-word"} textOverflow={"ellipsis"}>
            <HStack w={"100%"} justify={"space-between"} align={"start"}>
              <StarRatingStatic stars={reviewItem.star} />
              <ReviewLikeDislike isLiked={reviewItem.isLiked} />
            </HStack>
            <Text className={style.review} as={"span"}>
              {reviewItem.comment}
            </Text>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
}
