import useTheme from "@/shared/theme/hooks/useTheme"
import { MoonIcon, SunIcon } from "lucide-react"

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const isDarkMode = theme === "dark"

  return (
    <div className="flex justify-center">
      <input
        type="checkbox"
        id="switcher-input"
        checked={isDarkMode}
        onChange={toggleTheme}
        className="hidden"
      />
      <label
        htmlFor="switcher-input"
        className={`flex items-center justify-between w-14 h-7 p-1 rounded-full cursor-pointer transition ${
          isDarkMode ? "bg-gray-900" : "bg-gray-300 "
        }`}
      >
        <MoonIcon className={`text-blue-600 ${!isDarkMode && "hidden"}`} />
        <span
          className={"w-5 h-5 bg-white rounded-full transform transition"}
        ></span>
        <SunIcon className={`text-yellow-400 ${isDarkMode && "hidden"}`} />
      </label>
    </div>
  )
}

export default ThemeSwitcher
