import { HStack, VStack } from "@chakra-ui/layout";
import style from "./style.module.css";
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/input";
import { MdSearch, MdEvent, MdExplore } from "react-icons/md";
import NavbarLink from "../../ui/navbarLink/NavbarLink";
import { Box } from "@chakra-ui/react";
import NavbarCategory from "../../ui/navbarCategory/NavbarCategory";
import { constant } from "../../../data/constant";
import { useDispatch, useSelector } from "react-redux";
import { setScreenDarkenState } from "../../../app/features/screenDarken/deviceDarkenSlicer";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { setIsLogin } from "../../../app/features/users/userSlicer";
import NavbarLoginUtil from "../../ui/navbarLoginUtils/navbarLoginUtil";
import { checkIsLogedIn, parseToken } from "../../../utils/checkUsers";
import { useDisclosure } from "@chakra-ui/react";

export default function WebNavbar() {
  const { navbarCategories } = constant;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.users.isLogin);
  let userName = useRef("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    console.log(isLogin);
    if (checkIsLogedIn()) {
      dispatch(setIsLogin(true));
      userName.current = parseToken().username;
      console.log(userName.current);
    } else {
      dispatch(setIsLogin(false));
    }
  }, [location.pathname]);

  return (
    <nav className={style.webNavbar}>
      <HStack className={style.parentStack}>
        <Box
          className={style.headerWrapper}
          onClick={() => {
            navigate("/");
          }}
        >
          <span>EVENTKU.ID</span>
        </Box>

        <VStack className={style.inputGroup}>
          <InputGroup w={"100%"}>
            <Input
              bg={"white"}
              w={"100%"}
              borderColor={"transparent"}
              focusBorderColor={"transparent"}
              placeholder="Cari Event gaes"
              height={"2.2rem"}
              onFocus={() => {
                dispatch(setScreenDarkenState(true));
              }}
              onBlur={() => {
                dispatch(setScreenDarkenState(false));
              }}
            ></Input>
            <InputRightAddon
              h={"2.2rem"}
              minW={"10px"}
              bg={"#7887ff"}
              borderColor={"transparent"}
              fontSize={"2rem"}
            >
              <MdSearch className={style.searchIcon} />
            </InputRightAddon>
          </InputGroup>
          <HStack className={style.inputGroup__hashtag} spacing={"1rem"}>
            {navbarCategories.map((item, index) => {
              return (
                <NavbarCategory
                  key={index}
                  category={item.category}
                  icon={item.icon}
                  cardColor={item.color}
                />
              );
            })}
          </HStack>
        </VStack>

        <div className={style.rightWrapper}>
          <Box
            h={"2.2rem"}
            w={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <div className={style.navlinkWrapper}>
              <NavbarLink
                icon={<MdEvent />}
                name={"Buat Event"}
                onClick={() => {
                  navigate("/create-event");
                }}
              />
              <Box width={"2rem"}></Box>
              <NavbarLink
                icon={<MdExplore />}
                name={"Telusuri Event"}
                onClick={() => {
                  navigate("/discovery");
                }}
              />
            </div>
          </Box>
          {isLogin ? (
            <NavbarLoginUtil
              isLogin={isLogin}
              userData={{ userName: userName.current }}
              disclosure={{ isOpen, onOpen, onClose }}
            />
          ) : (
            <NavbarLoginUtil
              navigate={() => {
                navigate("/logIn");
              }}
            />
          )}
        </div>
      </HStack>
    </nav>
  );
}
