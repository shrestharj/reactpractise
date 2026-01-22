import { COMMENT_DATA } from "../constant"

export const commentAction = (data) => {
    return {
        type: COMMENT_DATA,
        payload: data
    }

}


