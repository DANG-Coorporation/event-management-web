import { VStack, Heading, Divider, Box } from "@chakra-ui/react";
import style from "./style.module.css";
import AccordionFilter from "../../ui/accordionFilter/AccordionFilter";
import propType from "prop-types";

DiscoveryFilter.propTypes = {
  items: propType.array,
};

export default function DiscoveryFilter({ items }) {
  return (
    <>
      <VStack className={style.filterContainer} align={"start"}>
        <Box className={style.headerContainer}>
          <Heading as="h2" fontSize={"24px"} fontWeight={"700"}>
            Filter
          </Heading>
        </Box>

        <Divider orientation="horizontal" borderColor={"gray"} />
        {items.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <AccordionFilter
                key={index}
                title={item.title}
                filterItems={item.FilterItems}
              />
            );
          } else {
            return (
              <>
                <AccordionFilter
                  key={index}
                  title={item.title}
                  filterItems={item.FilterItems}
                />
                <Divider orientation="horizontal" borderColor={"gray"} />
              </>
            );
          }
        })}
      </VStack>
    </>
  );
}
