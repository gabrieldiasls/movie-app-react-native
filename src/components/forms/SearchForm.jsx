import {
  Box,
  FormControl,
  Input,
  Stack,
  Select,
  Button,
  SearchIcon,
  Icon,
  Ionicons,
  CheckIcon,
} from "native-base";
import { useState } from "react";

export default function SearchForm() {
  const [type, setType] = useState("");

  return (
    <Box alignItems="center">
      <Box w="100%" maxWidth="300px">
        <FormControl isRequired>
          <Stack mx="4" marginY={2}>
            <FormControl.Label>Search Movie/TV Show Name</FormControl.Label>
            <Input placeholder="i.e. James Bond, CSI" />
          </Stack>
          <Stack direction="row" marginY={2}>
            <Stack mx="4">
              <FormControl.Label>Choose Search Type</FormControl.Label>
              <Select
                selectedValue={type}
                minWidth="200"
                accessibilityLabel="Choose a List"
                placeholder="Choose a List"
                id="selectMovie"
                _selectedItem={{
                  bg: "teal.600",
                }}
                mt={1}
                onValueChange={(itemValue) => {
                  setType(itemValue);
                }}
              >
                <Select.Item label="Movie" value="movie" />
                <Select.Item label="Multi" value="multi" />
                <Select.Item label="TV" value="tv" />
              </Select>
              <FormControl.HelperText>
                Please select a search type
              </FormControl.HelperText>
            </Stack>
            <Button
              w={"30%"}
              h={10}
              //   leftIcon={<Icon as={SearchIcon} name="search" size="sm" color="white" mt="0.5" />}
              leftIcon={<SearchIcon size="5" mt="0.5" color="white" />}
              marginTop="7"
            >
              Search
            </Button>
          </Stack>
        </FormControl>
      </Box>
    </Box>
  );
}
