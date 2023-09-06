import React, { useState } from "react";
import { Input, Box, List, ListItem, Text, VStack } from "@chakra-ui/react";

const AutocompleteInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Your autocomplete data (replace this with your own data)
  const autocompleteData = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Fig",
    "Grape",
    "Lemon",
    "Mango",
    "Orange",
    "Peach",
    "Pear",
    "Pineapple",
    "Strawberry",
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter suggestions based on the input value
    const filteredSuggestions = autocompleteData.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]); // Clear suggestions when a suggestion is clicked
  };

  return (
    <Box>
      <Input
        placeholder='Type here...'
        value={searchTerm}
        onChange={handleInputChange}
      />
      {suggestions.length > 0 && (
        <List mt={2} borderWidth='1px' borderColor='gray.200' borderRadius='md'>
          {suggestions.map((suggestion) => (
            <ListItem
              key={suggestion}
              p={2}
              _hover={{ bg: "gray.100", cursor: "pointer" }}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              <Text>{suggestion}</Text>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default AutocompleteInput;
