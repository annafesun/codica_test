import { Button, CardMedia, CircularProgress, Paper, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useLayoutEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "store"
import { getCityWeather } from "store/reducers/weather/selectors"
import { updateCityWeather } from "store/reducers/weather/slice"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableRow from "@mui/material/TableRow"

const City = () => {
  const dispatch = useAppDispatch()
  const { cityName } = useParams<{ cityName: string }>()
  const city = useAppSelector(getCityWeather(cityName!))
  const navigateBack = useNavigate()

  useLayoutEffect(() => {
    if (!cityName) return

    dispatch(updateCityWeather(cityName))
  }, [dispatch, cityName])

  if (city?.loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
        <CircularProgress size="200px" />
      </Box>
    )
  }

  if (!city) {
    return (
      <Box sx={{ p: 10 }}>
        <Button size="small" variant="contained" color="secondary" onClick={() => navigateBack(-1)}>
          Back
        </Button>
        <Typography variant="h1">Sorry can not upload detailed city data</Typography>
      </Box>
    )
  }

  function createValue(name: string, value: any) {
    return { name, value }
  }

  const rows = [
    createValue("Temperature", city.main.temp + " C"),
    createValue("Temperature feels like", city.main.feels_like + " C"),
    createValue("Clouds", city.clouds.all + "%"),
    createValue("Humidity", city.main.humidity + "%"),
    createValue("Wind speed", city.wind.speed + " meter/sec"),
    createValue("Visibility", city.visibility + " meter"),
    createValue("Sunrise & Sunset", `Sunrise: ${city.sys.sunrise} Sunset: ${city.sys.sunset}`),
  ]

  return (
    <Paper elevation={3} sx={{ m: 10, minHeight: "100vh" }}>
      <Box sx={{ display: "flex", p: 4, justifyContent: "space-between" }}>
        <Button size="small" variant="contained" color="secondary" onClick={() => navigateBack(-1)}>
          Back
        </Button>
        <Typography component="p" sx={{ flex: "0 0 50%", fontSize: "34px", fontWeight: "700" }}>
          {city.name}
        </Typography>
      </Box>
      <Typography variant="h2" component="p" sx={{ p: 5 }}>
        Description: {city.weather[0].description}
      </Typography>
      <CardMedia
        sx={{ width: "120px", height: "140px", margin: "0 auto" }}
        image={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
        title="weather icon"
      />

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row" sx={{ fontWeight: "bold" }}>
                {row.name}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default City
