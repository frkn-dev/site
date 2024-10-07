import { type ReactNode, useEffect, useMemo, useState } from "react"
import { ThemeContext } from "./context"

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches
      setTheme(prefersDark ? "dark" : "light")
    }
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMounted) {
      document.body.classList.remove("light", "dark")
      document.body.classList.add(theme)
      localStorage.setItem("theme", theme)
    }
  }, [theme, isMounted])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  const value = useMemo(() => ({ theme, toggleTheme }), [theme])

  if (!isMounted) {
    return null
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
