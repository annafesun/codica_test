import { useDispatch } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { WeatherActions } from "../store/reducers/weather"

export const useActions = () => {
  const dispatch = useDispatch()

  const WeatherActs = bindActionCreators(WeatherActions, dispatch)

  return {
    WeatherActs,
  }
}
