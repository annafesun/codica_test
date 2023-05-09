import { PropsWithChildren } from "react"
import { Provider } from "react-redux"
import { persistor, store } from "../store"
import { ThemeProvider } from "@mui/system"
import { PersistGate } from "redux-persist/integration/react"
import { theme } from "styles/theme"

type Props = PropsWithChildren

const ProviderWrapper = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default ProviderWrapper
