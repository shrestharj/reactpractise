import { COMMENT_DATA } from "../constant"

export const commentAction = (data) => {
    console.log(data);
    return {
        type: COMMENT_DATA,
        payload: data
    }

}


