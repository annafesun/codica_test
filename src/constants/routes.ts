import { generatePath } from "react-router-dom"

export const ALL = "/"
export const CITY = "/:cityName"

export const generateCityPath = (cityName: string) => generatePath(CITY, { cityName })
