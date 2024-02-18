import { checkIfQueryContainsNumbers, extractNumbers } from "./helperFunctions";
import { gteKeywords, commonWords, lteKeywords } from "./keywords";

const splitQuery = (query: string) => {
  return query.split(" ");
};

const arrayToQuery = (array: any) => {
  return array.map((value: any) => "search=" + value).join("&");
};

const containsLTEKeyword = (inputString: string): boolean => {
  const words = inputString.split(" ");
  return words.some((word) => lteKeywords.includes(word.toLowerCase()));
};

const containsGTEKeyword = (inputString: string): boolean => {
  const words = inputString.split(" ");
  return words.some((word) => gteKeywords.includes(word.toLowerCase()));
};

const removeNumberFromArray = (array: any) => {
  return array.filter((e: any) => isNaN(e));
};

export const generateSearchQuery = (query: string) => {
  let productPrice;
  let searchQuery;

  if (checkIfQueryContainsNumbers(query)) {
    productPrice = extractNumbers(query);
  }

  const pattern = new RegExp("\\b(" + commonWords.join("|") + ")\\b", "gi");
  const cleanedString = query.replace(pattern, "");
  const splittedQuery = splitQuery(cleanedString.trim());
  const filteredSplittedQuery = removeNumberFromArray(
    splittedQuery.filter((str) => str !== "")
  );

  searchQuery = arrayToQuery(filteredSplittedQuery);

  if (containsLTEKeyword(query)) {
    searchQuery += `&product_discounted_price__lte=${productPrice}`;
  }

  if (containsGTEKeyword(query)) {
    searchQuery += `&product_discounted_price__gte=${productPrice}`;
  }

  return searchQuery;
};
