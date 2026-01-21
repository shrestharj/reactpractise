import { COMMENT_DATA } from "../constant"


const initialData = [];

export const commentReducer = (state = initialData, action) => {

    switch (action.type) {

        case COMMENT_DATA:
            console.log(action, "reducer");
            return action.payload;

        default:
            return state;
    }
}


