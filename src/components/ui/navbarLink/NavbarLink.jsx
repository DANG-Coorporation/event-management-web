import { HStack } from "@chakra-ui/layout";
import style from "./style.module.css";
import propType from "prop-types";

NavbarLink.propTypes = {
  icon: propType.element,
  name: propType.string,
  onClick: propType.func,
};

export default function NavbarLink({ icon, name, onClick }) {
  return (
    <div className={style.container} onClick={onClick}>
      <HStack>
        <div className={style.iconContainer}>{icon}</div>
        <span className={style.name}>{name}</span>
      </HStack>
    </div>
  );
}
