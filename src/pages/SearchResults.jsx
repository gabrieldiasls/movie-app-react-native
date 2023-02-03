import Test from "../components/testComponent/Test";
import SearchForm from "../components/forms/SearchForm";
import {
  Box,
  FormControl,
  Input,
  Stack,
  Select,
  Button,
  SearchIcon,
} from "native-base";
import { useState } from "react";
import { View } from "react-native";
import ItemList from "../components/list/ItemList";

const SearchResults = () => {
  const [type, setType] = useState("");
  const [search, setSearch] = useState("");
  const [arrayData, setArrayData] = useState([]);
  const [render, setRender] = useState(false);

  const ObjectDisplayData = class {
    constructor(title, popularity, releaseDate, posterURL) {
      this.title = title;
      this.popularity = popularity;
      this.releaseDate = releaseDate;
      this.posterURL = posterURL;
    }
  };

  const fetchData = async (type, search, apiKey) => {
    const arrayDataLoop = [];
    setRender(true);

    const url = `https://api.themoviedb.org/3/search/${type}?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false`;

    const populatingData = async () => {
      if ((type = "movie")) {
        for (let movie of response["results"]) {
          const title = movie["original_title"];
          const popularity = movie["popularity"];
          const releaseDate = movie["release_date"];
          const posterURL = movie["poster_path"];

          const movieObject = new ObjectDisplayData(
            title,
            popularity,
            releaseDate,
            posterURL
          );

          arrayDataLoop.push(movieObject);
        }
      }

      for (let tvShow of response["results"]) {
        const title = tvShow["name"];
        const popularity = tvShow["popularity"];
        const releaseDate = tvShow["first_air_date"];
        const posterURL = tvShow["poster_path"];

        const showObject = new ObjectDisplayData(
          title,
          popularity,
          releaseDate,
          posterURL
        );

        arrayDataLoop.push(showObject);
        console.log(arrayDataLoop);
      }
    };
    const apiCall = await fetch(url);
    const response = await apiCall.json();

    await populatingData();
    setArrayData(arrayDataLoop);
    console.log(arrayData);
  };

  const apiKey = "3a2fbc64e2a7dd139fd17f89bd43e255";

  //   useEffect(() => {
  //     fetchData(type, apiKey, search);
  //   }, [type]);

  return (
    <View style={{ backgroundColor: "white" }}>
      <Box alignItems="center">
        <Box w="100%" maxWidth="300px">
          <FormControl isRequired>
            <Stack mx="4" marginY={2}>
              <FormControl.Label>Search Movie/TV Show Name</FormControl.Label>
              <Input
                placeholder="i.e. James Bond, CSI"
                onChangeText={(text) => {
                  setSearch(text);
                  console.log("text", search);
                }}
              />
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
                    console.log(type);
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
                leftIcon={<SearchIcon size="5" mt="0.5" color="white" />}
                marginTop="7"
                onPress={() => fetchData(type, search, apiKey)}
              >
                Search
              </Button>
            </Stack>
          </FormControl>
        </Box>
      </Box>

      {render ? <ItemList titleData={arrayData} /> : <></>}
    </View>
  );
};

export default SearchResults;
