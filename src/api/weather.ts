import axios from "axios"
import { Weather } from "store/reducers/weather/types"

export const getCityWeather = async (cityName: string) => {
  const response = await axios.get<Weather>(`?q=${cityName}&appid=55d18e2d84d705efe96ba97f820e5bed&units=metric`)

  return response.data
}
