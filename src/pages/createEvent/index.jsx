import { Box, HStack, Input, Text, VStack } from "@chakra-ui/react";
import style from "./style.module.css";
import { useEffect, useRef } from "react";
import { AiFillEdit, AiOutlineFileAdd } from "react-icons/ai";
import { FcEditImage, FcRemoveImage } from "react-icons/fc";
import { GoDotFill } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCoverImage,
  setCoverImage,
  setModalCategory,
} from "../../app/features/createEvent/createEventSlicer";
import ModalEventCategory from "../../components/ui/modalEventCategory";
import formatConstants from "../../data/format.constants";
import topicConstants from "../../data/topic.constants";

export default function CreateEvent() {
  const hiddenFileInput = useRef(null); // ADDED
  // const [file, setFile] = useState(null); // ADDED

  const createEvent = useSelector((state) => state.createEvent);
  const file = createEvent.coverImage;
  const dispatch = useDispatch();
  const openModalCategory = () => dispatch(setModalCategory(true));
  console.log("createEvent", createEvent);
  useEffect(() => {
    console.log(file);
  }, [file]);

  const handleClick = (event) => {
    hiddenFileInput.current.click(); // ADDED
  };
  return (
    <VStack className={style["main-container"]}>
      <VStack className={style["main-info"]}>
        <Box
          className={style["upload-image-container"]}
          bgImage={
            file
              ? `url(${file})`
              : "url(https://www.loket.com/images/banner-event.jpg)"
          }
          backgroundSize={file ? "cover" : "contain"}
        >
          <Box
            height={"50px"}
            width={"50px"}
            ml={"auto"}
            mr={"auto"}
            onClick={handleClick}
            display={file ? "none" : "block"}
            cursor={"pointer"}
          >
            <AiOutlineFileAdd size={"50px"} />
          </Box>
          <Input
            type='file'
            accept='.jpg, .jpeg, .png, .heic, .heif'
            display={"none"}
            ref={hiddenFileInput}
            onChange={(e) => {
              dispatch(setCoverImage(URL.createObjectURL(e.target.files[0])));
            }}
          />
          <Text
            textAlign={"center"}
            fontSize={"larger"}
            display={file ? "none" : "block"}
          >
            Unggah gambar/poster/banner
          </Text>
          <Text textAlign={"center"} display={file ? "none" : "block"}>
            Direkomendasikan 724 x 340px dan tidak lebih dari 2Mb
          </Text>
        </Box>
        <HStack ml={"auto"} mt={"-70px"} mr={"20px"}>
          <Box
            padding={"5px"}
            borderRadius={"25%"}
            backgroundColor={"blue.600"}
            display={file ? "block" : "none"}
            onClick={handleClick}
          >
            <FcEditImage size={"25px"} />
          </Box>
          <Box
            padding={"5px"}
            borderRadius={"25%"}
            backgroundColor={"blue.600"}
            display={file ? "block" : "none"}
            onClick={() => dispatch(removeCoverImage())}
          >
            <FcRemoveImage size={"25px"} />
          </Box>
        </HStack>
        <VStack
          position={"absolute"}
          mt={"420px"}
          border={"2px solid"}
          borderRadius={"0 0 20px 20px"}
          borderColor={"gray.300"}
          borderTop={"none"}
          width={"100%"}
          paddingBottom={"50px"}
        >
          <Input
            className={style["event-title-input"]}
            color={"blackAlpha.800"}
            fontSize={"1.8em"}
            width={"90%"}
            mt={"20px"}
            placeholder='Judul acara'
            style={{
              border: "none",
            }}
            focusBorderColor='transparent'
          ></Input>
          <Box width={"90%"} color={"#0049cc"} onClick={openModalCategory}>
            <HStack>
              <Text>{formatConstants[createEvent.formatIndex]}</Text>
              <GoDotFill size={"15px"} color='#0049cc' />
              <Text>{topicConstants[createEvent.topicIndex]}</Text>
              <AiFillEdit size={"20px"} color='#0049cc' />
            </HStack>
          </Box>
        </VStack>
      </VStack>
      <ModalEventCategory />
    </VStack>
  );
}
