import { VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import ModalEventCategory from "../../components/form/createEvent/modalEventCategory";
import ModalSetTime from "../../components/form/createEvent/modalSetTime";
import CreateEventInformation from "./eventInformation";
import style from "./style.module.css";
import UploadCoverImage from "./uploadCoverImage";
import { useEffect } from "react";
import OpenStreetMapLoader from "../../components/ui/map/openStreepMap";
import "./index.css";
import ModalGetEventLocation from "../../components/form/createEvent/modalGetLocationEvent";
import AutocompleteInput from "./test";
import { getlatLong } from "../../api/geoApi";
export default function CreateEvent() {
  const createEvent = useSelector((state) => state.createEvent);
  console.log("debug-event", createEvent);
  // useEffect(() => {
  //   async function getLatLong2() {
  //     const result = await getlatLong("polsek+citeureup ,bogor");
  //     console.log("result", result);
  //   }
  //   getLatLong2();
  // }, []);
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
