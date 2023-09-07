import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  HStack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaRegClock } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  removeTicketTier,
  setModalDetilTicket,
  setModalDetileTicketStatus,
  ticketType,
} from "../../../app/features/createEvent/createEventSlicer";
import configTime from "../../../data/configTime";
import { convertNumberToCurrency } from "../../../utils/currency";
import { convertDateTimeFormat, diffTwoDate } from "../../../utils/dateHelper";

export default function TicketDetailPage({
  name,
  type,
  startTime,
  endTime,
  price,
  desc,
  index,
  quota,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const dispatch = useDispatch();
  const onRemoveTicket = () => {
    dispatch(removeTicketTier(index));
  };

  const onEditTicket = () => {
    const data = {
      index: index,
      type: type,
      ticketName: name,
      ticketQty: quota,
      ticketDesc: desc,
      ticketPrice: price,
      startDate: convertDateTimeFormat(
        startTime,
        configTime.sql_date_without_second,
        configTime.iso_date
      ),
      startTime: convertDateTimeFormat(
        startTime,
        configTime.sql_date_without_second,
        configTime.time_only
      ),
      endDate: convertDateTimeFormat(
        endTime,
        configTime.sql_date_without_second,
        configTime.iso_date
      ),
      endTime: convertDateTimeFormat(
        endTime,
        configTime.sql_date_without_second,
        configTime.time_only
      ),
    };
    dispatch(setModalDetilTicket(data));
    dispatch(setModalDetileTicketStatus(true));
  };

  const isExpired = () => {
    return (
      diffTwoDate(
        new Date().toISOString().split("T")[0],
        convertDateTimeFormat(
          startTime,
          configTime.sql_date_without_second,
          configTime.iso_date
        )
      ) > 0
    );
  };

  return (
    <>
      <Box
        width={"100%"}
        minHeight={"193px"}
        bgColor={isExpired() ? "#FECACA" : "#EBF5FF"}
        border={isExpired() ? "1px solid #DC2626" : "1px solid #0049CC"}
        borderRadius={"10px"}
        padding={"16px 32px"}
        mb={"20px"}
        color={isExpired() ? "#DC2626" : "#007AFF"}
      >
        <VStack textAlign={"left"} position={"relative"}>
          <Box
            minHeight={"111px"}
            width={"100%"}
            borderBottom={
              isExpired() ? "1px dashed #DC2626" : "1px dashed black"
            }
            borderColor={isExpired() ? "#DC2626" : "#0049CC"}
          >
            <Text ml={0} mr={"auto"} fontSize={"18pt"} mt={"auto"} mb={"auto"}>
              {name}
            </Text>
            <Text
              ml={0}
              mr={"auto"}
              fontSize={"12pt"}
              mt={"auto"}
              mb={"auto"}
              textAlign={"justify"}
            >
              {desc}
            </Text>
            <HStack padding={"auto"} margin={"10px 0px"}>
              <FaRegClock
                size={"20px"}
                color={isExpired() ? "#DC2626" : "#007AFF"}
              />
              <Text
                ml={0}
                mr={"auto"}
                mt={"auto"}
                color={isExpired() ? "#DC2626" : "#007AFF"}
                mb={"auto"}
              >
                {isExpired() ? (
                  <Text color={"#DC2626"}>Tiket sudah tidak tersedia</Text>
                ) : (
                  <>
                    {diffTwoDate(
                      new Date().toISOString().split("T")[0],
                      convertDateTimeFormat(
                        startTime,
                        configTime.sql_date_without_second,
                        configTime.iso_date
                      )
                    ) > 0 ? (
                      <>
                        Mulai dijual tanggal{" "}
                        {convertDateTimeFormat(
                          startTime,
                          configTime.sql_date_without_second,
                          configTime.date_month_full_string
                        )}
                        {" | "}{" "}
                        {convertDateTimeFormat(
                          startTime,
                          configTime.sql_date_without_second,
                          configTime.time_only
                        )}{" "}
                      </>
                    ) : (
                      <>
                        Dijual sampai tanggal{" "}
                        {convertDateTimeFormat(
                          endTime,
                          configTime.sql_date_without_second,
                          configTime.date_month_full_string
                        )}
                        {" | "}{" "}
                        {convertDateTimeFormat(
                          endTime,
                          configTime.sql_date_without_second,
                          configTime.time_only
                        )}{" "}
                      </>
                    )}
                  </>
                )}
              </Text>
            </HStack>
          </Box>
          <HStack height={"34px"} width={"100%"} pt={"auto"} pb={"0px"}>
            <Text ml={0} mr={"auto"} fontSize={"16pt"}>
              {type == ticketType.free.name
                ? "Gratis"
                : type == ticketType.minimumPay.name
                ? `Minimum ${convertNumberToCurrency(price)}`
                : convertNumberToCurrency(price)}
            </Text>
            <Button
              colorScheme='blue'
              isDisabled={isExpired()}
              disabled={isExpired()}
            >
              Beli Tiket
            </Button>
          </HStack>
        </VStack>
      </Box>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Ticket Tier
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme='red'
                onClick={() => {
                  onRemoveTicket();
                  onClose();
                }}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
