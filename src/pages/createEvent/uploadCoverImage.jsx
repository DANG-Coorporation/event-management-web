import { Box, HStack, Input, Text, Tooltip } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { AiFillEdit, AiOutlineFileAdd } from "react-icons/ai";
import { BiSolidTrashAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { removeCoverImage } from "../../app/features/createEvent/createEventSlicer";
import style from "./style.module.css";
import configConstants from "../../data/config";

export default function UploadCoverImage() {
  const hiddenFileInput = useRef(null);
  const createEvent = useSelector((state) => state.createEvent);
  const [currentCoverImage, setCurrentCoverImage] = useState(
    createEvent.coverImage
  );
  const dispatch = useDispatch();
  useEffect(() => {}, [currentCoverImage]);

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
          <AiOutlineFileAdd size={"50px"} color='white' />
        </Box>
        <Input
          type='file'
          accept={configConstants.imageExtensionAllowed}
          display={"none"}
          ref={hiddenFileInput}
          onChange={(e) => {
            dispatch(removeCoverImage(URL.createObjectURL(e.target.files[0])));
            setCurrentCoverImage(URL.createObjectURL(e.target.files[0]));
          }}
        />
        <Text
          textAlign={"center"}
          fontSize={"larger"}
          display={currentCoverImage ? "none" : "block"}
          color={"white"}
        >
          Unggah gambar/poster/banner
        </Text>
        <Text
          textAlign={"center"}
          display={currentCoverImage ? "none" : "block"}
          color={"white"}
        >
          Direkomendasikan 724 x 340px dan tidak lebih dari 2Mb
        </Text>
      </Box>
      <HStack ml={"auto"} mt={"-70px"} mr={"20px"}>
        <Tooltip label='Ganti foto' aria-label='Ganti foto'>
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
        </Tooltip>
        <Tooltip label='Hapus foto' aria-label='Hapus foto'>
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
        </Tooltip>
      </HStack>
    </>
  );
}
