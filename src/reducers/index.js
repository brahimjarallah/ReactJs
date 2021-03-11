import isLoggedReducer from "./isLogged"
import counterReducer from "./counter"
import { combineReducers } from "redux"
const rootReducer = combineReducers({
  isLoggedReducer,
  counterReducer,
})

export default rootReducer
