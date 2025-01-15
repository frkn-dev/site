import { useRef } from "react"

export const SubLinkInput: React.FC<{ value: string }> = ({ value }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleInputClick = () => inputRef.current?.select()

  return (
    <div className="flex items-center">
      <input
        type="text"
        readOnly
        value={value}
        ref={inputRef}
        onClick={handleInputClick}
        className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-300 px-2 py-1 w-full text-black dark:text-white"
      />
    </div>
  )
}
