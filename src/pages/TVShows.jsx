import { View } from "react-native";
import { Select, Box, Center } from "native-base";
import ItemList from "../components/list/ItemList";
import { useEffect, useState } from "react";

function TVShows() {
  const [arrayData, setArrayData] = useState([]);
  const [type, setType] = useState("");
  const [render, setRender] = useState(false);

  const ObjectDisplayData = class {
    constructor(title, popularity, releaseDate, posterURL) {
      this.title = title;
      this.popularity = popularity;
      this.releaseDate = releaseDate;
      this.posterURL = posterURL;
    }
  };

  const fetchData = async (type, apiKey) => {
    const arrayDataLoop = [];

    const url = `https://api.themoviedb.org/3/tv/${type}?api_key=${apiKey}&language=en-US&page=1`;

    const populatingData = async () => {
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
      }
    };
    const apiCall = await fetch(url);
    const response = await apiCall.json();

    await populatingData();
    setArrayData(arrayDataLoop);
  };

  const apiKey = "3a2fbc64e2a7dd139fd17f89bd43e255";

  useEffect(() => {
    fetchData(type, apiKey);
  }, [type]);

  return (
    <View style={{backgroundColor: 'white'}}>
      <Center marginY={5}>
        <Box maxW={300}>
          <Select
            selectedValue={type}
            minWidth="200"
            accessibilityLabel="Choose a List"
            placeholder="Choose a List"
            id="selectShow"
            _selectedItem={{
              bg: "teal.600",
            }}
            mt={1}
            onValueChange={(itemValue) => {
              setType(itemValue);
              setRender(true);
            }}
          >
            <Select.Item label="Airing Today" value="airing_today" />
            <Select.Item label="On The Air" value="on_the_air" />
            <Select.Item label="Popular" value="popular" />
            <Select.Item label="Top Rated" value="top_rated" />
          </Select>
        </Box>
      </Center>

      {render ? <ItemList titleData={arrayData} /> : <></>}
    </View>
  );
}

export default TVShows;