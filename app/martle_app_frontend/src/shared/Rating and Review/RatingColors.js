export const ratingColors = {
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

const getRatingColor = (rating) => {
  return ratingColors[rating];
};

export default getRatingColor;
