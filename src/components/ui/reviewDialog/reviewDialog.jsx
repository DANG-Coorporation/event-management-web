import { Text, VStack } from "@chakra-ui/layout";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
} from "@chakra-ui/modal";
import { Textarea } from "@chakra-ui/textarea";
import { useEffect, useRef, useState } from "react";
import propType from "prop-types";
import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import {
  setIndex,
  setHover,
} from "../../../app/features/starRatingBehaviour/starRating";
import { useDispatch, useSelector } from "react-redux";
import { postUserReview } from "../../../app/features/review/postReviewSlicer";
import { useToast } from "@chakra-ui/toast";
import { useLocation } from "react-router";
import { parseToken } from "../../../utils/checkUsers";
import { setIsUpdate } from "../../../app/features/review/reviewUpdateSlicer";
import { getReviewByEvent } from "../../../app/features/review/getReviewByEvent";
import { setNumericRating } from "../../../app/features/starRatingBehaviour/starRating";
import { calculateAverageRating } from "../../../utils/calculateRatingRate";
import { getUsersByReview } from "../../../app/features/users/userSlicer";
import { setReviewObjList } from "../../../app/features/review/reviewSlicer";
import { generateReviewObject } from "../../../utils/generateReviewobj";
import { setRatingData } from "../../../app/features/starRatingBehaviour/starRating";
import { calculateRatingData } from "../../../utils/calculateRatingAmount";
ReviewAlert.propTypes = {
  isOpen: propType.bool,
  onClose: propType.func,
  star: propType.number,
};

export default function ReviewAlert({ isOpen, onClose, star }) {
  const cancelRef = useRef();
  const textAreaRef = useRef();
  const dispatch = useDispatch();
  const [isInvalid, setInvalid] = useState(false);
  const toast = useToast();
  const location = useLocation();
  const reviewPostStatus = useSelector((state) => state.postReview.loading);

  useEffect(() => {
    if (reviewPostStatus === "success") {
      toast({
        title: "review berhasil dikirim",
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    } else if (reviewPostStatus === "failed") {
      toast({
        title: "review gagal dikirim",
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      dispatch(setHover(0));
      dispatch(setIndex(0));
    }

    onClose();
  }, [reviewPostStatus]);

  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogBody>
            <VStack>
              <Text fontWeight={"500"} mb={"1rem"}>
                Terima kasih atas rating anda, selanjutnya tambahkan review
                anda!
              </Text>
              <FormControl isRequired isInvalid={isInvalid}>
                <FormLabel>Review</FormLabel>
                <Textarea placeholder="isi review anda" ref={textAreaRef} />
                <FormErrorMessage>Review harus diisi</FormErrorMessage>
              </FormControl>
            </VStack>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button
              mr={"4px"}
              w={"90px"}
              bg={"red.400"}
              onClick={() => {
                dispatch(setHover(0));
                dispatch(setIndex(0));
                onClose();
              }}
            >
              Kembali
            </Button>
            <Button
              w={"90px"}
              onClick={async () => {
                if (textAreaRef.current.value.length === 0) {
                  setInvalid(true);
                  return;
                }
                setInvalid(false);
                const date = new Date();
                const loc = location.pathname;
                const obj = {
                  eventId: parseInt(loc.split("/")[2]),
                  userId: parseToken().id,
                  star: star,
                  comment: textAreaRef.current.value,
                  commentTime: {
                    date: date.toISOString().split("T")[0],
                    time: `${date.getHours().toString().padStart(2, "0")}:${date
                      .getMinutes()
                      .toString()
                      .padStart(2, "0")}`,
                  },
                };
                try {
                  dispatch(setIsUpdate(true));
                  const res = await dispatch(postUserReview(obj));
                  if (res.payload.toString().startsWith("2")) {
                    const id = parseInt(location.pathname.split("/")[2]);
                    const reviewbyevent = await dispatch(getReviewByEvent(id));
                    console.log("from Async =>", reviewbyevent.payload);
                    dispatch(
                      setNumericRating(
                        calculateAverageRating(reviewbyevent.payload)
                      )
                    );
                    const userbyreview = await dispatch(
                      getUsersByReview(reviewbyevent.payload)
                    );
                    dispatch(
                      setRatingData(calculateRatingData(reviewbyevent.payload))
                    );
                    console.log("from Async =>", userbyreview.payload);
                    dispatch(
                      setReviewObjList([
                        ...generateReviewObject(
                          userbyreview.payload,
                          reviewbyevent.payload
                        ),
                      ])
                    );
                  }
                } catch (e) {
                  console.log(e);
                }
              }}
            >
              Kirirm
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
