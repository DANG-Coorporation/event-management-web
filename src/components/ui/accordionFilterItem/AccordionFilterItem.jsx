import { Box } from "@chakra-ui/react";
import style from "./style.module.css";
import propType from "prop-types";

AccordionFilterItem.propTypes = {
  itemName: propType.string,
};

export default function AccordionFilterItem({ keyItem, itemName }) {
  return (
    <>
      <Box key={keyItem} className={style.itemContainer}>
        {itemName}
      </Box>
    </>
  );
}
