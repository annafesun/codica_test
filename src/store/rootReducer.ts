import { combineReducers } from "@reduxjs/toolkit"
//reducers
import { reducer as weather } from "./reducers/weather"

export default combineReducers({
  weather,
})
