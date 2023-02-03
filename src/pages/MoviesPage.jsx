import { View } from "react-native";
import { Select, Box, Center } from "native-base";
import ItemList from "../components/list/ItemList";
import { useEffect, useState } from "react";

function MoviePage() {
  const [arrayData, setArrayData] = useState([]);
  const [type, setType] = useState("");
  const [render, setRender] = useState(false);
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [runOnce, setRunOnce] = useState(false);

  const ObjectDisplayData = class {
    constructor(title, popularity, releaseDate, posterURL) {
      this.title = title;
      this.popularity = popularity;
      this.releaseDate = releaseDate;
      this.posterURL = posterURL;
    }
  };

  const fetchData = async (type, apiKey) => {
    // setIsLoading(true);
    const arrayDataLoop = [];

    const url = `https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}&language=en-US&page=1`;

    const populatingData = async () => {
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
    };
    const apiCall = await fetch(url);
    const response = await apiCall.json();

    await populatingData();
    setArrayData(arrayDataLoop);

    // console.log(arrayData);

    // setIsLoading(false);
  };

  const apiKey = "3a2fbc64e2a7dd139fd17f89bd43e255";

  //   useEffect(() => {
  //     setRunOnce(false);
  //   }, []);

  // const selectField = document.querySelector('#selectMovie');
  // let renderElements = false;

  // selectField.addEventListener('change', renderElements = true);

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
            id="selectMovie"
            _selectedItem={{
              bg: "teal.600",
            }}
            mt={1}
            onValueChange={(itemValue) => {
              setType(itemValue);
              setRender(true);
            //   console.log(itemValue);
            }}
          >
            <Select.Item label="Now Playing" value="now_playing" />
            <Select.Item label="Popular" value="popular" />
            <Select.Item label="Top Rated" value="top_rated" />
            <Select.Item label="Upcoming" value="upcoming" />
          </Select>
        </Box>
      </Center>

      {/* {isLoading ? <></> : <ItemList titleData={arrayData} />} */}
      {render ? <ItemList titleData={arrayData} /> : <></>}
      {/* <ItemList titleData={arrayData} /> */}
    </View>
  );
}

export default MoviePage;
