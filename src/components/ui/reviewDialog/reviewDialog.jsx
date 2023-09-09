import { Text, VStack } from "@chakra-ui/layout";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
} from "@chakra-ui/modal";
import { Textarea } from "@chakra-ui/textarea";
import { useRef, useState } from "react";
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
import { useDispatch } from "react-redux";

ReviewAlert.propTypes = {
  isOpen: propType.bool,
  onClose: propType.func,
};

export default function ReviewAlert({ isOpen, onClose }) {
  const cancelRef = useRef();
  const textAreaRef = useRef();
  const dispatch = useDispatch();
  const [isInvalid, setInvalid] = useState(false);
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
              onClick={() => {
                if (textAreaRef.current.value.length === 0) {
                  setInvalid(true);
                  return;
                }
                setInvalid(false);
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
