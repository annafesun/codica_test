import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "store"

export const getWeatherReducer = (state: RootState) => state.weather
export const getCityWeather = (cityName: string) =>
  createSelector(
    (state: RootState) => state.weather.cityWeathers,
    (cityWeathers) => cityWeathers.find((city) => city.name === cityName)
  )
