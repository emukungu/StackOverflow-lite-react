import { initialState } from "./initialState";
import { SIGN_UP } from "../actions/actionTypes";

export const signupReducer = (state = initialState.message, action) => {
    const { payload } = action
    switch (action.type){
    case SIGN_UP:
        return payload;
    default:
        return state;
}
}
