import style from "./style.module.css";
import { Card, HStack } from "@chakra-ui/react";
import propType from "prop-types";

NavbarCategory.propTypes = {
  icon: propType.element,
  category: propType.string,
  cardColor: propType.string,
};

export default function NavbarCategory({ icon, category, cardColor }) {
  return (
    <Card
      className={style.card}
      px={"0.2rem"}
      py={"0.3rem"}
      bg={cardColor}
      alignItems={"center"}
      borderRadius={"27px"}
      color={"white"}
      _hover={{ cursor: "pointer" }}
    >
      <HStack>
        <div className={style.iconContainer}>{icon}</div>
        <span>{category}</span>
      </HStack>
    </Card>
  );
}
