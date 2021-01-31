import { combineReducers } from "redux"
import calenderReducer from "./calendar"
import chatReducer from "./chat"
import customizer from "./customizer"
import auth from "./auth"
import navbar from "./navbar"
import property from "./property"

const rootReducer = combineReducers({
  auth: auth,
  calendar: calenderReducer,
  chatApp: chatReducer,
  customizer: customizer,
  navbar: navbar,
  property: property,
})

export default rootReducer
