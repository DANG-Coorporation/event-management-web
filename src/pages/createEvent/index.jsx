import { VStack, useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setDraftCreateEvent } from "../../app/features/createEvent/createEventSlicer";
import ModalDetailTicketCreateEvent from "../../components/form/createEvent/modalDetailTicket";
import ModalEventCategory from "../../components/form/createEvent/modalEventCategory";
import ModalGetEventLocation from "../../components/form/createEvent/modalGetLocationEvent";
import ModalSetTime from "../../components/form/createEvent/modalSetTime";
import CategoryDescriptionEvent from "./categoryDescription";
import CreateEventInformation from "./eventInformation";
import FooterCreateEvent from "./footer";
import style from "./style.module.css";
import UploadCoverImage from "./uploadCoverImage";
export default function CreateEvent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast({
        title: "Anda belum login",
        description: "Silahkan login terlebih dahulu",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      navigate("/logIn");
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const draftEvent = localStorage.getItem("draftEvent");
    if (draftEvent) {
      dispatch(setDraftCreateEvent(JSON.parse(draftEvent)));
    }
  }, [dispatch]);
  return isLoggedIn ? (
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
  ) : (
    <></>
  );
}
