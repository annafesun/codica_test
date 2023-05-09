import React from "react"
import { PropsWithChildren } from "react"
import { Provider } from "react-redux"
import { ThemeProvider } from "@mui/system"
import { PersistGate } from "redux-persist/integration/react"
import { theme } from "styles/theme"
import { createStore, persistor } from "store"
import { Suspense } from "react"
import { ALL } from "constants/routes"
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
import { Box, CircularProgress } from "@mui/material"

type Props = PropsWithChildren

const testStore = createStore()

const TestProvideWrapper = ({ children }: Props) => {
  return (
    <Provider store={testStore}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Suspense
            fallback={
              <Box
                sx={{
                  width: "100vw",
                  height: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress sx={{ width: "50px", height: "50px" }} />
              </Box>
            }
          >
            <BrowserRouter>
              <Routes>
                <Route path={ALL} element={children} />
                <Route path="*" element={<Navigate to={ALL} replace={true} />} />
              </Routes>
            </BrowserRouter>
          </Suspense>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default TestProvideWrapper
