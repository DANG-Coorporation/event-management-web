import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";

export default function SyaratKetentuan ()
{

    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
    <>
        <Button  bg="blue.500"
            padding="2"
            borderRadius="4"
            fontWeight="bold"
            textColor="white" 
            onClick={onOpen}>Syarat & Ketentuan</Button>

        <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>SYARAT & KETENTUAN PEMESANAN</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight='bold' mb='1rem'>
              POIN-POIN S&K EVENTKU.ID
            </Text>
            <Text>
                <p>
                <ul type ="disc">
                Sebelum melakukan pemesanan tiket Event melalui Eventku.id, pastikan Anda telah membaca syarat dan ketentuan berikut:

<li>Layanan pemesanan dan pembayaran tiket Event adalah layanan pemesanan dan pembayaran tiket untuk acara-acara yang disediakan oleh penyelenggara event dengan menggunakan sistem penjualan tiket secara online melalui website Eventku.id.</li>
<li>Dalam menggunakan layanan pemesanan tiket Event, pengguna secara bertanggung jawab menyetujui untuk selalu memberikan data yang sah dan valid sesuai identitas resmi yang berlaku untuk digunakan sebagaimana mestinya dalam rangkaian proses pemesanan tiket Event. Segala kerugian yang timbul akibat kesalahan atau kelalaian pengguna dalam menginformasikan data yang diperlukan dalam layanan ini, merupakan tanggung jawab sepenuhnya dari masing-masing pengguna.</li>
<li>Pengguna menyetujui bahwa setiap tindakan pengguna saat menggunakan layanan ini berdasarkan persetujuan pengguna, termasuk (meski tidak terbatas) pada pemilihan kategori event, pemilihan jadwal event, pemilihan tempat duduk, kelas tiket, jumlah tiket, pengisian jumlah peserta dan identitas masing-masing peserta, pemilihan metode pembayaran, dan lain sebagainya.</li>
<li>Segala kerugian yang timbul akibat kelalaian atau kesalahan pengguna dalam memahami atau mengikuti prosedur serta tata cara pemesanan maupun pembayaran yang diatur dalam Syarat & Ketentuan ini maupun ketentuan penyelenggara jasa pemesanan dan pembelian tiket event, tidak menjadi tanggung jawab pihak Eventku.id.</li>
<li>Dengan melakukan pemesanan tiket Event melalui layanan ini, pengguna menyetujui untuk membayar total biaya yang harus dibayarkan sebagaimana tertera pada halaman pembayaran di website, yang terdiri dari harga tiket Event dan biaya-biaya lain yang mungkin timbul dan akan diuraikan secara tegas dalam halaman pembayaran.</li>
<li>Ketentuan mengenai pengurangan tarif tiket Event yang tidak berkaitan dengan promosi yang diadakan Eventku.id, akan merujuk sepenuhnya pada ketentuan penyelenggara event.</li>
<li>Setiap sesi pemesanan dibatasi dengan batas waktu pemesanan dan pembayaran tiket. Pengguna setuju untuk melakukan pembayaran sebelum batas waktu pembayaran tiket berakhir. Pembayaran di luar batas waktu pembayaran tidak diperkenankan dan proses sesi pemesanan akan batal secara otomatis, serta bukan merupakan tanggung jawab Eventku.id.</li>
<li>Ketentuan dan tata tertib yang diberlakukan saat acara berlangsung, merupakan kewenangan dari pihak penyelenggara event. </li>
<li>Pembatalan tiket, perubahan pada tiket, pengembalian uang, serta hal-hal lain yang berhubungan dengan penggunaan layanan penyelenggaraan event merupakan kebijakan dan tanggung jawab dari penyelenggara event dengan merujuk kepada syarat dan ketentuan yang ditetapkan oleh penyelenggara event. </li>
</ul>
                </p>
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </>
    )
}
