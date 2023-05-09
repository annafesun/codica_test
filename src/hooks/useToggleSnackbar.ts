import { useEffect, useState } from "react"

const useToggleSnackBar = (isOpen: boolean) => {
  const [open, setOpen] = useState(isOpen)

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return event
    }

    setOpen(false)
  }

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  return { open, handleClose }
}

export default useToggleSnackBar
