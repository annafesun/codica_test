import { lazy, Suspense } from "react"
import { ALL, CITY } from "../constants/routes"
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
import { Box, CircularProgress } from "@mui/material"

const All = lazy(() => import("../pages/All"))
const City = lazy(() => import("../pages/City"))

const AppRoutes = () => {
  return (
    <Suspense
      fallback={
        <Box sx={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <CircularProgress sx={{ width: "50px", height: "50px" }} />
        </Box>
      }
    >
      <BrowserRouter>
        <Routes>
          <Route path={ALL} element={<All />} />
          <Route path={CITY} element={<City />} />
          <Route path="*" element={<Navigate to={ALL} replace={true} />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default AppRoutes
