import { VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import ModalDetailTicketCreateEvent from "../../components/form/createEvent/modalDetailTicket";
import ModalEventCategory from "../../components/form/createEvent/modalEventCategory";
import ModalGetEventLocation from "../../components/form/createEvent/modalGetLocationEvent";
import ModalSetTime from "../../components/form/createEvent/modalSetTime";
import CategoryDescriptionEvent from "./categoryDescription";
import CreateEventInformation from "./eventInformation";
import FooterCreateEvent from "./footer";
import style from "./style.module.css";
import UploadCoverImage from "./uploadCoverImage";
import { setDraftCreateEvent } from "../../app/features/createEvent/createEventSlicer";
import { useEffect } from "react";
export default function CreateEvent() {
  const createEvent = useSelector((state) => state.createEvent);
  console.log("debug-event", createEvent);
  const dispatch = useDispatch();

  useEffect(() => {
    const draftEvent = localStorage.getItem("draftEvent");
    if (draftEvent) {
      dispatch(setDraftCreateEvent(JSON.parse(draftEvent)));
    }
  }, [dispatch]);
  return (
    <>
      <VStack className={style["main-container"]}>
        <VStack className={style["main-info"]}>
          <UploadCoverImage />
          <CreateEventInformation />
        </VStack>
        <CategoryDescriptionEvent />
      </VStack>
      <FooterCreateEvent />
      <ModalEventCategory />
      <ModalSetTime />
      <ModalGetEventLocation />
      <ModalDetailTicketCreateEvent />
    </>
  );
}
