import { Box, HStack, Input, Text, Tooltip } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { AiFillEdit, AiOutlineFileAdd } from "react-icons/ai";
import { BiSolidTrashAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCoverImage,
  setCoverImage,
} from "../../app/features/createEvent/createEventSlicer";
import configConstants from "../../data/config";
import style from "./style.module.css";
import { readFileAsBuffer, uploadFile } from "../../utils/minioService";

export default function UploadCoverImage() {
  const hiddenFileInput = useRef(null);
  const createEvent = useSelector((state) => state.createEvent);
  const [rawCoverImage, setRawCoverImage] = useState(null);
  const [currentCoverImage, setCurrentCoverImage] = useState(
    createEvent.data.coverImage
  );
  const dispatch = useDispatch();

  useEffect(() => {
    async function asyncUploadCoverImage() {
      try {
        if (!rawCoverImage) return;
        const result = await uploadFile(rawCoverImage);
        setCurrentCoverImage(result);
        dispatch(setCoverImage(result));

        // console.log("debug-upload", result);
      } catch (error) {
        console.error("debug-error", error);
      }
    }
    if (currentCoverImage) {
      asyncUploadCoverImage();
    }
  }, [rawCoverImage]);

  useEffect(() => {
    setCurrentCoverImage(createEvent.data.coverImage);
  }, [createEvent]);

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
            setRawCoverImage(e.target.files[0]);
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
