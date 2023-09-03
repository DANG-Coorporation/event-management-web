import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Divider,
  HStack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { AiFillEdit } from "react-icons/ai";
import { BiSolidTrashAlt } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa";
import LoremIpsum from "react-lorem-ipsum";
import {
  convertDateTimeFormat,
  convertStringToDate,
  diffTwoDate,
} from "../../../utils/dateHelper";
import configTime from "../../../data/configTime";
import {
  removeTicketTier,
  ticketType,
} from "../../../app/features/createEvent/createEventSlicer";
import { convertNumberToCurrency } from "../../../utils/currency";
import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";

export default function BigTicketDisplay(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const { name, type, startTime, endTime, price, desc, index } = props;
  const dispatch = useDispatch();
  const onRemoveTicket = () => {
    dispatch(removeTicketTier(index));
  };
  useEffect(() => {
    console.log("debug-today", new Date().toISOString().split("T")[0]);
    console.log("debug-startTime", startTime);
    console.log(
      "debug-convertStartTime",
      convertDateTimeFormat(
        startTime,
        configTime.sql_date_without_second,
        configTime.iso_date
      )
    );
    console.log(
      "debug-ticket",
      diffTwoDate(
        new Date().toISOString().split("T")[0],
        convertDateTimeFormat(
          startTime,
          configTime.sql_date_without_second,
          configTime.iso_date
        )
      )
    );
  }, []);
  return (
    <>
      <Box
        width={"900px"}
        minHeight={"193px"}
        bgColor={"#EBF5FF"}
        border={"1px solid #0049CC"}
        borderRadius={"10px"}
        padding={"16px 32px"}
        mb={"20px"}
      >
        <VStack textAlign={"left"} position={"relative"}>
          <Box
            minHeight={"111px"}
            width={"100%"}
            borderBottom={"1px dashed black"}
            borderColor={"#0049CC"}
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
              <FaRegClock size={"20px"} color={"#007AFF"} />
              <Text
                ml={0}
                mr={"auto"}
                mt={"auto"}
                color={"#007AFF"}
                mb={"auto"}
              >
                {diffTwoDate(
                  new Date().toISOString().split("T")[0],
                  convertDateTimeFormat(
                    startTime,
                    configTime.sql_date_without_second,
                    configTime.iso_date
                  )
                ) > 0 && (
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
                )}
                {diffTwoDate(
                  new Date().toISOString().split("T")[0],
                  convertDateTimeFormat(
                    startTime,
                    configTime.sql_date_without_second,
                    configTime.iso_date
                  )
                ) <= 0 && (
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
                {/* Mulai dijual tanggal{" "}
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
                )}{" "} */}
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
            <AiFillEdit
              size={"20px"}
              style={{
                marginRight: "10px",
              }}
              color='rgb(0, 73, 204)'
              cursor={"pointer"}
            />
            <BiSolidTrashAlt
              color='#FF3B30'
              size={"20px"}
              cursor={"pointer"}
              onClick={onOpen}
            />
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
