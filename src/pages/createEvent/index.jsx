import { VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import ModalEventCategory from "../../components/form/createEvent/modalEventCategory";
import ModalSetTime from "../../components/form/createEvent/modalSetTime";
import CreateEventInformation from "./eventInformation";
import style from "./style.module.css";
import UploadCoverImage from "./uploadCoverImage";

export default function CreateEvent() {
  const createEvent = useSelector((state) => state.createEvent);
  console.log("createEvent", createEvent);

  return (
    <>
      <VStack className={style["main-container"]}>
        <VStack className={style["main-info"]}>
          <UploadCoverImage />
          <CreateEventInformation />
        </VStack>
      </VStack>
      <ModalEventCategory />
      <ModalSetTime />
    </>
  );
}
