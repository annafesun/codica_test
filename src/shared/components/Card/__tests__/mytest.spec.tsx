import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import CityCard from "../index"
import { MOCK_CITY } from "mocks/Card"
import * as All from "store/reducers/weather/slice"
import React from "react"
import TestProvideWrapper from "test/providers/TestProvideWrapper"

const mockRemoveCard = jest.fn()
const mockNavigate = jest.fn()

jest.mock("axios")
jest.mock("hooks/useActions", () => ({
  useActions: () => ({
    WeatherActs: {
      removeCard: mockRemoveCard,
    },
  }),
}))
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}))

describe("CityCard component", () => {
  it("should render the city name and temperature", () => {
    render(
      <TestProvideWrapper>
        <CityCard city={MOCK_CITY} />
      </TestProvideWrapper>
    )
    expect(screen.getByText(/lviv weather/i)).toBeInTheDocument()
    expect(screen.getByText(/Temperature:/i)).toHaveTextContent(`Temperature: ${MOCK_CITY.main.temp} ℃`)
  })

  it("should call updateCityWeather when update info button is clicked", async () => {
    const { getByRole } = render(
      <TestProvideWrapper>
        <CityCard city={MOCK_CITY} />
      </TestProvideWrapper>
    )

    userEvent.click(getByRole("button", { name: /update info/i }))

    const updateCityWeatherSpied = jest.spyOn(All, "updateCityWeather")

    await waitFor(() => {
      expect(updateCityWeatherSpied).toHaveBeenCalledWith(MOCK_CITY.name)
    })
  })

  it("should call removeCard when delete button is clicked", async () => {
    const { getByTestId } = render(
      <TestProvideWrapper>
        <CityCard city={MOCK_CITY} />
      </TestProvideWrapper>
    )

    userEvent.click(getByTestId(/test/i))
    await waitFor(() => {
      expect(mockRemoveCard).toHaveBeenCalledWith(MOCK_CITY.id)
    })
  })

  it("should navigate to city path when see more information button is clicked", async () => {
    const { getByRole } = render(
      <TestProvideWrapper>
        <CityCard city={MOCK_CITY} />
      </TestProvideWrapper>
    )

    userEvent.click(getByRole("button", { name: /see more information/i }))
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalled()
    })
  })
})
