import { Box, HStack, Input, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { AiFillEdit, AiOutlineFileAdd } from "react-icons/ai";
import { BiSolidTrashAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";
import {
  removeCoverImage,
  setCoverImage,
} from "../../app/features/createEvent/createEventSlicer";

export default function UploadCoverImage() {
  const hiddenFileInput = useRef(null);
  const createEvent = useSelector((state) => state.createEvent);
  const [currentCoverImage, setCurrentCoverImage] = useState(
    createEvent.coverImage
  );
  const file = createEvent.coverImage;
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("currentCoverImage", currentCoverImage);
  }, [currentCoverImage]);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  return (
    <>
      <Box
        className={style["upload-image-container"]}
        bgImage={
          currentCoverImage
            ? `url(${currentCoverImage})`
            : "url(https://www.loket.com/images/banner-event.jpg)"
        }
        backgroundSize={currentCoverImage ? "cover" : "contain"}
      >
        <Box
          height={"50px"}
          width={"50px"}
          ml={"auto"}
          mr={"auto"}
          onClick={handleClick}
          display={currentCoverImage ? "none" : "block"}
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
            console.log(e.target.files[0]);
            // dispatch(setCoverImage(URL.createObjectURL(e.target.files[0])));
            setCurrentCoverImage(URL.createObjectURL(e.target.files[0]));
          }}
        />
        <Text
          textAlign={"center"}
          fontSize={"larger"}
          display={currentCoverImage ? "none" : "block"}
        >
          Unggah gambar/poster/banner
        </Text>
        <Text
          textAlign={"center"}
          display={currentCoverImage ? "none" : "block"}
        >
          Direkomendasikan 724 x 340px dan tidak lebih dari 2Mb
        </Text>
      </Box>
      <HStack ml={"auto"} mt={"-70px"} mr={"20px"}>
        <Box
          padding={"5px"}
          borderRadius={"25%"}
          backgroundColor={"blackAlpha.600"}
          display={currentCoverImage ? "block" : "none"}
          cursor={"pointer"}
          onClick={handleClick}
        >
          <AiFillEdit color='white' size={"25px"} />
        </Box>
        <Box
          padding={"5px"}
          borderRadius={"25%"}
          backgroundColor={"blackAlpha.600"}
          display={currentCoverImage ? "block" : "none"}
          cursor={"pointer"}
          onClick={(e) => {
            dispatch(removeCoverImage());
            setCurrentCoverImage(null);
            hiddenFileInput.current.value = null;
          }}
        >
          <BiSolidTrashAlt color='white' size={"25px"} />
        </Box>
      </HStack>
    </>
  );
}
