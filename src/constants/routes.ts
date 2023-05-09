import { generatePath } from "react-router-dom"

export const ALL = "/codica_test"
export const CITY = `${ALL}/:cityName`

export const generateCityPath = (cityName: string) => generatePath(CITY, { cityName })
