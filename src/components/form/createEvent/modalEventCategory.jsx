import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  setEventTags,
  setFormatEvent,
  setModalCategory,
  setTopicEvent,
} from "../../../app/features/createEvent/createEventSlicer";
import formatConstants from "../../../data/format.constants";
import topicConstants from "../../../data/topic.constants";
import Tag from "../../ui/tag";

export default function ModalEventCategory() {
  const isOpen = useSelector((state) => state.createEvent.isOpenModalCategory);
  const dispatch = useDispatch();
  const onOpen = () => dispatch(setModalCategory(true));
  const onClose = () => dispatch(setModalCategory(false));
  const event = useSelector((state) => state.createEvent);
  const [format, setFormat] = useState(0);
  const [topic, setTopic] = useState(0);
  const [isPrivate, setIsPrivate] = useState(event.isPrivate);
  const [tagList, setTagList] = useState([...event.tag]);
  const [tag, setTag] = useState("");

  const onPublic = () => {
    setIsPrivate(false);
  };

  const onRemoveTag = () => {};
  const onPrivate = () => {
    setIsPrivate(true);
  };
  useEffect(() => {
    console.log("format", format);
    console.log("topic", topic);
  }, [format, topic]);

  const onSave = () => {
    dispatch(setFormatEvent(format));
    dispatch(setTopicEvent(topic));
    dispatch(setEventTags(tagList));
    onClose();
  };
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel mt={"10px"}>Format</FormLabel>
              <Select
                placeholder='Pilih format event'
                onChange={(e) => {
                  setFormat(e.target.value);
                }}
                defaultValue={event.formatIndex}
              >
                {formatConstants.map((format, index) => {
                  return (
                    <option key={index} value={index}>
                      {format}
                    </option>
                  );
                })}
              </Select>
              <FormLabel mt={"10px"}>Topik</FormLabel>
              <Select
                placeholder='Pilih topik event'
                onChange={(e) => {
                  setTopic(e.target.value);
                }}
                defaultValue={event.topicIndex}
              >
                {topicConstants.map((value, index) => {
                  return (
                    <option key={index} value={index}>
                      {value}
                    </option>
                  );
                })}
              </Select>
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
              <Divider mt={"10px"} mb={"10px"} />
              <FormLabel mt={"10px"}>Tag</FormLabel>
              <FormHelperText>
                Tambahkan kata kunci agar eventmu mudah ditemukan
              </FormHelperText>
              <InputGroup mt={"10px"}>
                <Input
                  disabled={tagList.length >= 5}
                  value={tag}
                  onChange={(e) => {
                    setTag(e.target.value);
                  }}
                ></Input>
                <InputRightElement>
                  <Button
                    bgColor={"transparent"}
                    padding={"0"}
                    isDisabled={tagList.length >= 5}
                    _hover={{
                      bgColor: "blue.200",
                    }}
                    onClick={() => {
                      if (tagList.length < 5) {
                        setTagList([...tagList, tag]);
                        setTag("");
                      }
                    }}
                  >
                    <IoMdAdd size={"20px"} />
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormHelperText>{tagList.length}/5 tags</FormHelperText>
              <HStack mt={"10px"}>
                {tagList.map((tag, index) => {
                  return (
                    <Tag
                      key={index}
                      tag={tag}
                      onRemove={() => {
                        setTagList(tagList.filter((value, i) => i !== index));
                      }}
                    />
                  );
                })}
              </HStack>
              <FormLabel mt={"10px"}>Jenis Event</FormLabel>
              <Box
                border={"1px"}
                borderRadius={"5px"}
                borderColor={"gray.300"}
                padding={"5px"}
                //
                onClick={onPublic}
              >
                <HStack>
                  <Box
                    borderRadius={"50%"}
                    height={"20px"}
                    width={"20px"}
                    backgroundColor={isPrivate ? "gray.300" : "blue.600"}
                    border={"1px solid"}
                    borderColor={"blackAlpha.600"}
                  ></Box>
                  <VStack textAlign={"left"} alignItems={"start"} gap={0}>
                    <Text>Public</Text>
                    <Text fontSize={"8pt"}>
                      Event kamu akan tampil di halaman Cari Event
                    </Text>
                  </VStack>
                </HStack>
              </Box>
              <Box
                border={"1px"}
                borderRadius={"5px"}
                borderColor={"gray.300"}
                padding={"5px"}
                mt={"20px"}
                onClick={onPrivate}
              >
                <HStack>
                  <Box
                    borderRadius={"50%"}
                    height={"20px"}
                    width={"20px"}
                    backgroundColor={isPrivate ? "blue.600" : "gray.300"}
                    border={"1px solid"}
                    borderColor={"blackAlpha.600"}
                  ></Box>
                  <VStack textAlign={"left"} alignItems={"start"} gap={0}>
                    <Text>Private</Text>
                    <Text fontSize={"8pt"}>
                      Event kamu hanya diakses oleh orang tertentu
                    </Text>
                  </VStack>
                </HStack>
              </Box>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' onClick={onSave} width={"100%"}>
              Simpan
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
