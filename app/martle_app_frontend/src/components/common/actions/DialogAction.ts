export const initialState = {
  ratingAndReview: {
    open: false,
  },
  questionAndAnswer: {
    open: false,
  },
  addAddress: {
    open: false,
  },
  editAddress: {
    open: false,
  },
};

export default function DialogActionReducer(state, action) {
  switch (action.type) {
    case "OPEN_DIALOG":
      return {
        ...state,

        [action.payload.dialogType]: {
          open: true,
        },
      };

    case "CLOSE_DIALOG":
      return {
        ...state,
        [action.payload.dialogType]: {
          open: false,
        },
      };

    default:
      return state;
  }
}
