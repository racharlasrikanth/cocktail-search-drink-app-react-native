export const baseURL = "https://www.thecocktaildb.com/api/json/v1/1";

export const getRandomAlphabet = () => {
  let list = "abcdefghijklmnopqrstuvwxyz".split("");
  return list[Math.trunc(Math.random() * list.length)];
};

export const cocktailFormatedData = (comingData) => {
  let finalObj = {};
  comingData.forEach((eachItem) => {
    if (finalObj[eachItem.strCategory]) {
      finalObj[eachItem.strCategory].push(eachItem);
    } else {
      finalObj[eachItem.strCategory] = [eachItem];
    }
  });
  return Object.entries(finalObj);
};
