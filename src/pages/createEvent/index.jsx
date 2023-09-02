import { VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import ModalEventCategory from "../../components/form/createEvent/modalEventCategory";
import ModalGetEventLocation from "../../components/form/createEvent/modalGetLocationEvent";
import ModalSetTime from "../../components/form/createEvent/modalSetTime";
import CreateEventInformation from "./eventInformation";
import style from "./style.module.css";
import AutocompleteInput from "./test";
import UploadCoverImage from "./uploadCoverImage";
export default function CreateEvent() {
  const createEvent = useSelector((state) => state.createEvent);
  // console.log("debug-event", createEvent);
  return (
    <>
      <VStack className={style["main-container"]}>
        <VStack className={style["main-info"]}>
          <UploadCoverImage />
          <CreateEventInformation />
        </VStack>
        {/* <OpenStreetMapLoader /> */}
        <AutocompleteInput />
      </VStack>
      <ModalEventCategory />
      <ModalSetTime />
      <ModalGetEventLocation />
    </>
  );
}
