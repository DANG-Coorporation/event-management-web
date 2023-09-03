import AccordionFilterItem from "../accordionFilterItem/AccordionFilterItem";
import style from "./style.module.css";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  Box,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import propType from "prop-types";

AccordionFilter.propTypes = {
  title: propType.string,
  filterItems: propType.array,
};

export default function AccordionFilter({ title, filterItems }) {
  return (
    <Box className={style.accordionContainer}>
      <Accordion
        className={style.accordion}
        allowMultiple
        allowToggle
      >
        <AccordionItem className={style.accordionItem}>
          <AccordionButton>
            <Box className={style.title} as="span">
              {title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            {
                filterItems.map((item, index) => <AccordionFilterItem key={index} itemName={item}/>)
            }
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
