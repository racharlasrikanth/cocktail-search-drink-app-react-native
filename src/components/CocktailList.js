import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import Cocktail from "./Cocktail";

const CocktailList = ({ title, data, navigation }) => {
  return (
    <View style={{ paddingRight: 15 }}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(eachData) => eachData.idDrink}
        renderItem={({ item }) => {
          const {
            strDrinkThumb: imgURL,
            idDrink: id,
            strDrink: drinkName,
            strIngredient1: ing1,
            strIngredient2: ing2,
          } = item;
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("CocktailDetailsScreen", { id: id })
              }
            >
              <Cocktail
                imgURL={imgURL}
                id={id}
                drinkName={drinkName}
                ing1={ing1}
                ing2={ing2}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 10,
  },
});

export default withNavigation(CocktailList);
