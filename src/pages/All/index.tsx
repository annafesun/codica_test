import { useEffect, useState } from "react"
import { Alert, Box, Button, CircularProgress, Snackbar, TextField } from "@mui/material"
import { fetchCityWeather, updateCityWeathers } from "store/reducers/weather/slice"
import { useAppDispatch, useAppSelector } from "store"
import useToggleSnackBar from "hooks/useToggleSnackbar"
import { getWeatherReducer } from "store/reducers/weather/selectors"
import CityCard from "shared/components/Card"

const All = () => {
  const [city, setCity] = useState("")
  const dispatch = useAppDispatch()
  const { cityWeathers, error, loading } = useAppSelector(getWeatherReducer)

  const { open, handleClose } = useToggleSnackBar(loading === "failed")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value)
  }

  const handleAddCity = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(fetchCityWeather(city))
    setCity("")
  }

  useEffect(() => {
    const cityNames = cityWeathers.map((city) => city.name)

    dispatch(updateCityWeathers(cityNames))
  }, [dispatch])

  return (
    <Box sx={{ p: 10 }}>
      <Box component="form" onSubmit={handleAddCity} sx={{ mb: 4, display: "flex" }}>
        <TextField
          name="city"
          autoComplete="off"
          type="text"
          value={city}
          onChange={handleChange}
          fullWidth
          id="outlined-basic"
          label="Add city"
          variant="outlined"
        />
        <Button type="submit" sx={{ flex: "0 0 30%" }} variant="contained" color="secondary">
          Add
        </Button>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={handleClose}
      >
        <Alert severity="error" sx={{ width: "100%" }} onClose={handleClose} closeText="Close">
          {error}
        </Alert>
      </Snackbar>
      <Box sx={{ display: "flex", justifyContent: "center", ...(loading !== "pending" && { height: "30px" }), mb: 3 }}>
        {loading === "pending" && <CircularProgress size="30px" />}
      </Box>
      <Box sx={{ display: "grid", gap: 4, gridTemplateColumns: "repeat(4, 1fr)" }}>
        {cityWeathers.map((city) => (
          <CityCard key={city.id} city={city} />
        ))}
      </Box>
    </Box>
  )
}

export default All
