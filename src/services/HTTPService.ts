import axios from "axios"

const setDefaultAxios = () => {
  axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5/weather"
  axios.defaults.headers.common["Content-Type"] = "application/json"
}

export default setDefaultAxios
