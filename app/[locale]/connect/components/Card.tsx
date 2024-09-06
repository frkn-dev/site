"use client"
import Image from "next/image"
import type { StaticImageData } from "next/image"

export const Card: React.FC<{
  logo: string | StaticImageData
  title: string
  subtitle: string
  action: React.FC
}> = ({ logo, title, subtitle, action: Action }) => {
  return (
    <div className="flex items-center p-4 border rounded-lg shadow-md bg-white max-w-md">
      <Image className="w-16 h-16 mr-4" src={logo} alt={title} />

      <div className="flex-1">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <p className="text-gray-700">{subtitle}</p>
      </div>

      <Action />
    </div>
  )
}
