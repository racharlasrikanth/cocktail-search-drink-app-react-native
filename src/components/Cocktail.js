import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Cocktail = ({ drinkName, imgURL, id, ing1, ing2 }) => {
  return (
    <View style={styles.card} key={id}>
      <Image style={styles.image} source={{ uri: imgURL }} />
      <Text style={styles.drinkName}>{drinkName}</Text>
      <View style={styles.ingradients}>
        <Text style={styles.ingradient}>{ing1}</Text>
        <Text style={styles.ingradient}>{ing2}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    shadowColor: "#333",
    shadowOpacity: ".2.7",
    marginLeft: 15,
    marginBottom: 20,
  },
  image: {
    width: 250,
    borderRadius: 5,
    height: 170,
  },
  drinkName: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
    textAlign: "center",
    marginTop: 10,
    paddingHorizontal: 10,
    maxWidth: 250,
  },
  ingradients: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "center",
  },
  ingradient: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#e0dede",
    letterSpacing: 1,
    marginHorizontal: 5,
  },
});

export default Cocktail;
