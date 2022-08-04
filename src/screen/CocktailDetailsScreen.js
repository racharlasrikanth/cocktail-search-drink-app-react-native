import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { baseURL } from "../utils/helperFunctions";

const CocktailDetailsScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState({ status: false, msg: "" });
  const [cocktailData, setCocktailData] = useState({});

  const id = navigation.getParam("id");

  const getSingleCocktailData = async (id) => {
    const url = `${baseURL}/lookup.php?i=${id}`;
    setLoading(true);
    setIsError({ status: false, msg: "" });
    try {
      const response = await fetch(url);
      const { drinks } = await response.json();
      const [finalObj] = drinks;
      setCocktailData(finalObj);
      setLoading(false);
      setIsError({ status: false, msg: "" });
    } catch (error) {
      setLoading(false);
      setIsError({ status: true, msg: "something went wrong" });
      setCocktailData({});
    }
  };

  useEffect(() => {
    getSingleCocktailData(id);
  }, []);

  const {
    idDrink,
    strDrink,
    strDrinkThumb,
    strCategory,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    dateModified,
  } = cocktailData;

  if (loading) {
    return (
      <View>
        <Text style={styles.loading}>Loading...</Text>
      </View>
    );
  }

  if (isError?.status) {
    return (
      <View>
        <Text style={styles.error}>{isError.msg}</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.imageStyles} source={{ uri: strDrinkThumb }} />
        <Text style={styles.title}>{strDrink}</Text>
        <View>
          <Text style={{ ...styles.textView, ...styles.marginBottom5 }}>
            <Text style={{ ...styles.bold, ...styles.textView }}>Id:</Text>{" "}
            {idDrink}
          </Text>
          <Text style={{ ...styles.textView, ...styles.marginBottom5 }}>
            <Text style={{ ...styles.bold, ...styles.textView }}>
              Category:
            </Text>{" "}
            {strCategory}
          </Text>
          <Text style={{ ...styles.textView, ...styles.marginBottom5 }}>
            <Text style={{ ...styles.bold, ...styles.textView }}>
              Instructions:
            </Text>{" "}
            {strInstructions}
          </Text>
        </View>
        <View
          style={{ ...styles.ingradientContainer, ...styles.marginBottom5 }}
        >
          <Text style={{ ...styles.bold, ...styles.textView }}>
            Ingradients:
          </Text>
          <View style={styles.ingradients}>
            <Text style={{ ...styles.ingradient, ...styles.textView }}>
              {strIngredient1}
            </Text>
            <Text style={{ ...styles.ingradient, ...styles.textView }}>
              {strIngredient2}
            </Text>
            <Text style={{ ...styles.ingradient, ...styles.textView }}>
              {strIngredient3}
            </Text>
          </View>
        </View>
        <Text style={{ ...styles.textView, ...styles.marginBottom5 }}>
          <Text style={{ ...styles.bold, ...styles.textView }}>
            Date Modified:
          </Text>{" "}
          {dateModified || new Date().toLocaleDateString()}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  imageStyles: {
    width: "100%",
    aspectRatio: 335 / 280,
    borderRadius: 5,
    shadowColor: "#333",
    shadowOpacity: 0.7,
    marginBottom: 15,
  },
  marginBottom5: {
    marginBottom: 5,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    letterSpacing: 1,
    maxWidth: 330,
    marginBottom: 10,
  },
  bold: {
    fontWeight: "bold",
  },
  textView: {
    fontSize: 18,
    color: "#333",
  },
  ingradientContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ingradients: {
    flexDirection: "row",
  },
  ingradient: {
    marginLeft: 5,
    padding: 5,
    backgroundColor: "#e4e2e2",
    borderRadius: 3,
  },
  loading: {
    textAlign: "center",
    fontSize: 26,
    marginVertical: 100,
  },
  error: {
    textAlign: "center",
    fontSize: 24,
    marginVertical: 100,
    color: "red",
    textTransform: "capitalize",
  },
});

export default CocktailDetailsScreen;
