import { legacy_createStore as CreateStore } from "redux";
import { rootReducer } from "../reducers";

const store = CreateStore(rootReducer);
store.subscribe(() => {
    console.log("Store changed", store.getState());
});

export default store;