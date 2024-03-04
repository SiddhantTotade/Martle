interface RatingColors {
  [key: number]: string;
}

interface RatingReviewColors {
  [key: number | string]: string;
}

export const darkRatingBarColors: RatingColors = {
  1: "#ede7f6",
  2: "#d1c4e9",
  3: "#b39ddb",
  4: "#9575cd",
  5: "#7e57c2",
};

export const lightRatingColors: RatingColors = {
  1: "#64b5f6",
  2: "#42a5f5",
  3: "#2196f3",
  4: "#1e88e5",
  5: "#1976d2",
};

export const ratingColors: RatingReviewColors = {
  0.5: "#e1f5fe",
  "1.0": "#b3e5fc",
  1.5: "#81d4fa",
  "2.0": "#4fc3f7",
  2.5: "#29b6f6",
  "3.0": "#03a9f4",
  3.5: "#039be5",
  "4.0": "#0288d1",
  4.5: "#0277bd",
  "5.0": "#01579b",
};

export const darkRatingColors: RatingReviewColors = {
  0.5: "#d1c4e9",
  "1.0": "#b39ddb",
  1.5: "#9575cd",
  "2.0": "#7e57c2",
  2.5: "#673ab7",
  "3.0": "#5e35b1",
  3.5: "#512da8",
  "4.0": "#4527a0",
  4.5: "#311b92",
  "5.0": "#4a148c",
};

const getRatingColor = (rating: string) => {
  return ratingColors[rating];
};

const getDarkRatingColor = (rating: string) => {
  return darkRatingColors[rating];
};

export { getRatingColor, getDarkRatingColor };
