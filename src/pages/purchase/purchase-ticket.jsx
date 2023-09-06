import { VStack } from "@chakra-ui/react";
import TicketSelection from "../../components/form/ticketSelectionTable/ticketSelectionTable";
import style from "./style.module.css";

export default function PaymentTicketSelection() {
  return (
    <VStack className={style.container}>
      <TicketSelection />
    </VStack>
  );
}
