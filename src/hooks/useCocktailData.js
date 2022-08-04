import { useState, useEffect } from "react";
import { baseURL, getRandomAlphabet } from "../utils/helperFunctions";

export default () => {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState({
    status: false,
    message: "",
    statusCode: "",
  });
  const [cocktailData, setCocktailData] = useState([]);

  useEffect(() => {
    getCockTailData(getRandomAlphabet());
  }, []);

  const getCockTailData = async (searchingItem) => {
    let url = `${baseURL}/search.php?s=${searchingItem}`;
    setLoading(true);
    setIsError({ status: false, message: "", statusCode: "" });
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCocktailData(data["drinks"] || []);
      setLoading(false);
      setIsError({ status: false, message: "", statusCode: "" });
    } catch (error) {
      setLoading(false);
      setIsError({
        status: true,
        message: "something went wrong",
        statusCode: error.statusCode,
      });
    }
  };

  return [loading, isError, cocktailData, getCockTailData];
};
