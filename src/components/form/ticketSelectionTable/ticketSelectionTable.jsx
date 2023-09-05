import {
  Box,
  Button,
  Divider,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import style from "./style.module.css";
import TicketQuantity from "../../ui/ticketQuantity/ticketQuantity";

export default function TicketSelection() {
  return (
    <Box className={style.tableCard}>
      <Text as={"span"} className={style.heading}>
        Pilih Kategori
      </Text>
      <Divider />
      <TableContainer className={style.tableContainer}>
        <Table w={"100%"}>
          <Thead bg={"gray.100"}>
            <Tr>
              <Th w={"300px"}>Jenis Kategori</Th>
              <Th w={"200px"}>Harga satuan</Th>
              <Th w={"200px"}>Kuantitas</Th>
              <Th w={"200px"}>Jumlah</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Diamond</Td>
              <Td>Rp.2.500.000</Td>
              <Td><TicketQuantity/></Td>
              <Td>Rp.7.500.000</Td>
            </Tr>
            <Tr>
              <Td>Diamond</Td>
              <Td>Rp.2.500.000</Td>
              <Td>3</Td>
              <Td>Rp.7.500.000</Td>
            </Tr>
            <Tr>
              <Td>Diamond</Td>
              <Td>Rp.2.500.000</Td>
              <Td>3</Td>
              <Td>Rp.7.500.000</Td>
            </Tr>
            <Tr>
              <Td>Diamond</Td>
              <Td>Rp.2.500.000</Td>
              <Td>3</Td>
              <Td>Rp.7.500.000</Td>
            </Tr>
            <Tr>
              <Td>Diamond</Td>
              <Td>Rp.2.500.000</Td>
              <Td>3</Td>
              <Td>Rp.7.500.000</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Divider />
      <Text as={"span"} className={style.warn}>
        {
          "Dengan menekan tombol \"Pesan Sekarang\", maka pembeli dianggap sudah menyetujui ketentuatan yang berlaku"
        }
      </Text>
      <Button variant={"solid"} className={style.bookButton}>
        Pesan Sekarang
      </Button>
    </Box>
  );
}
