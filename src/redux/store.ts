import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import * as reducers from "./reducers";
import { RootState } from "./types";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig: PersistConfig<any> = {
    key: "ami-sort-entity",
    storage,
    whitelist: [],
};

const appReducer = combineReducers<RootState>(reducers);
const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
