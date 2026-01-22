import { COMMENT_DATA } from "../constant";

const initialState = {
  commentList: [],
};

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_DATA:
      return {
        ...state,
        commentList: action.payload,
      };

    default:
      return state;
  }
};
