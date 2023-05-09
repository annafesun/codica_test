import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getCityWeather } from "api/weather"
import { WeatherState } from "./types"

export const INITIAL_STATE = {
  cityWeathers: [],
  loading: "idle",
  error: "",
} as WeatherState

const sliceName = "weather"

const { actions, reducer } = createSlice({
  name: sliceName,
  initialState: INITIAL_STATE,
  reducers: {
    removeCard: (state, action: PayloadAction<number>) => {
      state.cityWeathers = state.cityWeathers.filter((city) => city.id !== action.payload)
    },
    startCityUpdating: (state, action: PayloadAction<string>) => {
      state.cityWeathers = state.cityWeathers.map((city) => {
        if (city.name === action.payload) {
          city.loading = true
        }

        return city
      })
    },
  },
  extraReducers: (builder) => {
    // fetchCityWeather
    builder.addCase(fetchCityWeather.pending, (state) => {
      state.loading = "pending"
    })
    builder.addCase(fetchCityWeather.fulfilled, (state, action) => {
      const isCityAlreadyExist = state.cityWeathers.some((city) => city.id === action.payload.id)

      if (isCityAlreadyExist) {
        state.loading = "failed"
        state.error = "city is already exist"
        return
      }

      state.cityWeathers.push({ ...action.payload, loading: false })
      state.loading = "succeeded"
    })
    builder.addCase(fetchCityWeather.rejected, (state, action) => {
      state.error = action.payload as string
      state.loading = "failed"
    })
    // updateCityWeather
    builder.addCase(updateCityWeather.fulfilled, (state, action) => {
      state.cityWeathers = state.cityWeathers.map((city) => {
        if (city.name === action.payload.name) {
          return { ...action.payload, loading: false }
        }

        return city
      })
    })
    builder.addCase(updateCityWeather.rejected, (state, action) => {
      state.cityWeathers = state.cityWeathers.map((city) => {
        if (city.name === action.payload) {
          city.loading = false
        }

        return city
      })
    })
  },
})

export const updateCityWeathers = createAsyncThunk(
  `${sliceName}/updateCityWeathers`,
  async (citiNames: string[], thunkAPI) => {
    try {
      const iterations = citiNames.map((name) => thunkAPI.dispatch(updateCityWeather(name)))

      await Promise.all(iterations)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.response?.data?.message)
    }
  }
)

export const updateCityWeather = createAsyncThunk(
  `${sliceName}/updateCityWeather`,
  async (cityName: string, thunkAPI) => {
    try {
      thunkAPI.dispatch(actions.startCityUpdating(cityName))
      const cityWeather = await getCityWeather(cityName)

      return cityWeather
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.response?.data?.message)
    }
  }
)

export const fetchCityWeather = createAsyncThunk(
  `${sliceName}/fetchCityWeather`,
  async (cityName: string, thunkAPI) => {
    try {
      const cityWeather = await getCityWeather(cityName)

      return cityWeather
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.response?.data?.message)
    }
  }
)

export { actions as WeatherActions, reducer }
