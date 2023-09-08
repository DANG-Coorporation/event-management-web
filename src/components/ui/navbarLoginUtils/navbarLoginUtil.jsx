import {
  Button,
  Box,
  Text,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import propType from "prop-types";
import { BiUserCircle } from "react-icons/bi";
import { IoTicket } from "react-icons/io5";
import { MdOutlineExitToApp } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setScreenDarkenState } from "../../../app/features/screenDarken/deviceDarkenSlicer";
import LogoutDialog from "../logoutDialog/logoutDialog";
import { deleteToken } from "../../../utils/checkUsers";
import { setIsLogin } from "../../../app/features/users/userSlicer";

NavbarLoginUtil.propTypes = {
  navigate: propType.func,
  isLogin: propType.bool,
  userData: propType.object,
  disclosure: propType.object,
};

NavbarLoginUtil.defaultProps = {
  navigate: null,
  isLogin: false,
  userData: {},
  disclosure: {},
};

export default function NavbarLoginUtil({
  isLogin,
  navigate,
  userData,
  disclosure,
}) {
  var { userName } = userData;
  const { isOpen, onOpen, onClose } = disclosure;
  const dispatch = useDispatch();
  return (
    <Box
      display={"flex"}
      alignItems={"start"}
      justifyContent={"end"}
      flexDir={"row"}
      w={"30%"}
    >
      {!isLogin ? (
        <>
          <Button
            variant={"outline"}
            mr={"12px"}
            onClick={() => {
              navigate();
            }}
          >
            Masuk
          </Button>
          <Button
            variant={"solid"}
            bg={"#7887FF"}
            onClick={() => {
              navigate();
            }}
          >
            Daftar
          </Button>
        </>
      ) : (
        <>
          <Menu
            closeOnSelect
            onOpen={() => {
              dispatch(setScreenDarkenState(true));
            }}
            onClose={() => {
              dispatch(setScreenDarkenState(false));
            }}
          >
            <MenuButton as={Button} bg={"#7887FF"} w={"100%"}>
              <HStack spacing={"4px"} justify={"center"}>
                <BiUserCircle fontSize={"20px"} />
                <Text>{userName}</Text>
              </HStack>
            </MenuButton>
            <MenuList zIndex={"popover"}>
              <MenuItem
                color={"black"}
                bg={"white"}
                _hover={{ bg: "gray.100", transition: "all 0.3s" }}
                onClick={() => {}}
              >
                <HStack>
                  <Box fontSize={"20px"} color={"primary.500"}>
                    <IoTicket />
                  </Box>
                  <Text fontSize={"16px"}>Tiket Saya</Text>
                </HStack>
              </MenuItem>
              <MenuItem
                color={"black"}
                bg={"white"}
                _hover={{ bg: "gray.100", transition: "all 0.3s" }}
                onClick={onOpen}
              >
                <HStack>
                  <Box fontSize={"20px"} color={"red.400"}>
                    <MdOutlineExitToApp />
                  </Box>
                  <Text fontSize={"16px"}>Keluar</Text>
                </HStack>

                <LogoutDialog
                  isDialogOpen={isOpen}
                  onClose={onClose}
                  onLogout={() => {
                    deleteToken();
                    dispatch(setIsLogin(false));
                  }}
                />
              </MenuItem>
            </MenuList>
          </Menu>
        </>
      )}
    </Box>
  );
}
