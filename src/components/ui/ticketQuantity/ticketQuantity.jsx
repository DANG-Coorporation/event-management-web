import { Editable, HStack, IconButton } from "@chakra-ui/react";
import style from "./style.module.css";
import { MdAdd, MdMinimize } from "react-icons/md";

export default function TicketQuantity() {
  return (
    <HStack className={style.container}>
      <IconButton icon={<MdAdd />} />
      <Editable>
        1
      </Editable>
      <IconButton icon={<MdMinimize />} />
    </HStack>
  );
}
