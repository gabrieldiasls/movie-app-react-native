import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button, HStack, Box, Image } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const styles = StyleSheet.create({
  imageStyle: {
    width: "30%",
    height: 60,
    marginRight: 10,
    marginLeft: 15,
  },
  movieTitle: {
    fontWeight: "bold",
  },
  buttonStyle: {
    marginTop: 20,
  },
});

function MovieComponent({ movieTitle, popularity, releaseDate, imgLink, onPress }) {

  return (
    <HStack space={5} w={"100%"}>
      <Image source={{ uri: imgLink }} width={"25%"} height={"auto"} alt={movieTitle} marginX={"2"} marginY={"2"}/>
      <Box marginY={2}>
        <Text style={styles.movieTitle}>{movieTitle}</Text>
        <Text>Popularity: {popularity}</Text>
        <Text>Release Date: {releaseDate}</Text>
        <Button w={"90%"} marginTop={5} onPress={onPress}>More Details</Button>
      </Box>
    </HStack>
  );
}

export default MovieComponent;
