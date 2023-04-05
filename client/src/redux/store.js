import thunk from "redux-thunk"
import { applyMiddleware,legacy_createStore,combineReducers,compose } from "redux";
import { authReducer } from "./auth/auth.reducer";

const rootReducer=combineReducers({
    auth:authReducer
   
})
const createComposer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))