type Theme = "light" | "dark"

interface ThemeContextProps {
  theme: Theme
  toggleTheme: () => void
}
