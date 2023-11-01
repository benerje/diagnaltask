import { combineReducers } from "redux";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  content: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
