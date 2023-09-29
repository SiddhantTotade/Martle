export const emojis = {
  0.5: "🤮",
  1: "🤢",
  1.5: "😔",
  2: "😑",
  2.5: "😌",
  3: "🙂",
  3.5: "😊",
  4: "🥰",
  4.5: "😘",
  5: "🤩",
};

function ratingEmoji(rating) {
  return `${rating} Star${rating !== 1 ? "s" : ""}, ${emojis[rating]}`;
}

export default ratingEmoji;
