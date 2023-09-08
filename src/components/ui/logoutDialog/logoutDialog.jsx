import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";

import propType from "prop-types";
import { useRef } from "react";

LogoutDialog.propTypes = {
  onClose: propType.func,
  isDialogOpen: propType.bool,
  onLogout: propType.func,
};

export default function LogoutDialog({ onClose, isDialogOpen, onLogout }) {
  const cancelRef = useRef();
  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isDialogOpen}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize={"lg"} fontWeight={"bold"}>
            Keluar
          </AlertDialogHeader>

          <AlertDialogBody>Apakah anda yakin ingin keluar?</AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose} w={"80px"}>
              Tidak
            </Button>
            <Button
              ml={"4px"}
              onClick={() => {
                onClose();
                onLogout();
              }}
              w={"80px"}
              bg={"red.500"}
            >
              Iya
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
