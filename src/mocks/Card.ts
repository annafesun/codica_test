import { Weather } from "store/reducers/weather/types"

export const MOCK_CITY: Weather = {
  coord: {
    lon: 24.0232,
    lat: 49.8383,
  },
  weather: [
    {
      id: 802,
      main: "Clouds",
      description: "scattered clouds",
      icon: "03n",
    },
  ],
  base: "stations",
  main: {
    temp: 4.2,
    feels_like: 2.02,
    temp_min: 4.2,
    temp_max: 4.2,
    pressure: 1030,
    humidity: 91,
    sea_level: 1030,
    grnd_level: 994,
  },
  visibility: 10000,
  wind: {
    speed: 2.42,
    deg: 88,
    gust: 3.19,
  },
  clouds: {
    all: 45,
  },
  dt: 1683573281,
  sys: {
    country: "UA",
    sunrise: 1683514184,
    sunset: 1683568267,
  },
  timezone: 10800,
  id: 702550,
  name: "Lviv",
  cod: 200,
  loading: false,
}
