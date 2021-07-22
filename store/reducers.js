import * as actions from "./actions";

const initialState = {
    language: "he",
}

export default reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.CHANGE_LANGUAGE:
            return { 
                ...state,language:action.payload
            };
        default:
            return state;
    }
}