import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import SearchBar from "../components/SearchBar";
import useCocktailData from "../hooks/useCocktailData";
import CocktailList from "../components/CocktailList";
import { cocktailFormatedData } from "./../utils/helperFunctions";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, isError, cocktailData, getCockTailData] = useCocktailData();
  const finalData = cocktailFormatedData(cocktailData);

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={(newSearchTerm) => setSearchTerm(newSearchTerm)}
        onTermSubmit={() => getCockTailData(searchTerm)}
      />

      {loading && <Text style={styles.loading}>Loading...</Text>}
      {isError?.status && <Text style={styles.error}>{isError.message}</Text>}

      {!loading && !isError?.status && (
        <Text style={styles.lenghtext}>
          We are showing{" "}
          <Text style={styles.lenghtextnumber}>
            {cocktailData?.length || 0}
          </Text>{" "}
          results
        </Text>
      )}

      {!loading && !isError?.status && (
        <FlatList
          data={finalData}
          renderItem={({ item }) => {
            const [title, eachData] = item;
            return (
              <CocktailList
                loading={loading}
                isError={isError}
                title={title}
                data={eachData}
              />
            );
          }}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  lenghtext: {
    fontSize: 16,
    margin: 15,
  },
  lenghtextnumber: {
    fontWeight: "bold",
    fontSize: 18,
  },
  loading: {
    fontSize: 26,
    letterSpacing: 1,
    marginVertical: 100,
    textAlign: "center",
  },
  error: {
    fontSize: 24,
    letterSpacing: 1,
    color: "red",
    textAlign: "center",
    marginVertical: 100,
  },
});

export default SearchScreen;
