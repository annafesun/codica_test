import React, { memo } from "react"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material"
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded"
import { generateCityPath } from "constants/routes"
import { useNavigate } from "react-router-dom"
import { updateCityWeather } from "store/reducers/weather/slice"
import { useActions } from "hooks/useActions"
import { Weather } from "store/reducers/weather/types"
import { useAppDispatch } from "store"

const CityCard = ({ city }: { city: Weather }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {
    WeatherActs: { removeCard },
  } = useActions()

  return (
    <Card key={city.id} sx={{ minWidth: 350, background: "#bbbebf" }}>
      <CardContent>
        <CardHeader
          title={city.name + " weather"}
          action={
            <>
              <Button sx={{ width: "155px" }} onClick={() => dispatch(updateCityWeather(city.name))} variant="outlined">
                {city.loading ? <CircularProgress size="25px" /> : "Update info"}
              </Button>
              <IconButton data-testid="test" onClick={() => removeCard(city.id)} aria-label="delete">
                <HighlightOffRoundedIcon />
              </IconButton>
            </>
          }
        />
        <Typography variant="h3" sx={{ mb: 1.5 }} color="text.secondary">
          Temperature: {city.main.temp} &#8451;
        </Typography>
        <Typography variant="h3" sx={{ mb: 1.5 }} color="text.secondary">
          Feels like: {city.main.feels_like} &#8451;
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => navigate(generateCityPath(String(city.name)))}
          fullWidth
          variant="contained"
          size="small"
          style={{ background: "#012530" }}
        >
          See more information
        </Button>
      </CardActions>
    </Card>
  )
}

export default memo(CityCard)
