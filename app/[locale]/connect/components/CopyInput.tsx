import { Copy } from "lucide-react"
import { useRef } from "react"
import { toast } from "sonner"

export const CopyInput: React.FC<{ value: string }> = ({ value }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleInputClick = () => inputRef.current?.select()

  const handleCopyClick = async () => {
    if (inputRef.current) {
      await navigator.clipboard.writeText(inputRef.current.value)
      toast.success("👍")
    }
  }

  return (
    <div className="flex items-center">
      <input
        type="text"
        readOnly
        value={value}
        ref={inputRef}
        onClick={handleInputClick}
        className="bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-1 focus:ring-gray-300 px-2 py-1 w-full mr-2"
      />
      <Copy
        onClick={handleCopyClick}
        className="h-4 w-4 cursor-pointer text-white hover:text-blue-400"
      />
    </div>
  )
}
