import { FlatList } from "native-base";
import MovieComponent from "../cards/MovieComponent";

const ItemList = ({ titleData, onPress }) => {
    // console.log('titleData >>>', titleData)
  return (
    <FlatList
      data={titleData}
      renderItem={({ item }) => (
        <MovieComponent
          imgLink={`https://image.tmdb.org/t/p/w500${item.posterURL}`}
          movieTitle={item.title}
          popularity={item.popularity}
          releaseDate={item.releaseDate}
          onPress={onPress}
        />
      )}
      keyExtractor={item => item.title}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ItemList;
