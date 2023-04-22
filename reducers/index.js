import { combineReducers } from "redux";
import { loaderReducer } from "./loaderReducer";
import { languageReducer } from "./languageReducer";

export const rootReducer = combineReducers({
    loader: loaderReducer,
    lang: languageReducer
});

export default rootReducer;