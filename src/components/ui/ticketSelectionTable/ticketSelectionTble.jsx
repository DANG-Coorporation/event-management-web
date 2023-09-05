import {
  Card,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default function TicketSelection() {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Jenis Kategori</Th>
            <Th>Harga satuan</Th>
            <Th>Kuantitas</Th>
            <Th>Jumlah</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Diamond</Td>
            <Td>Rp.2.500.000</Td>
            <Td>3</Td>
            <Td>Rp.7.500.000</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
