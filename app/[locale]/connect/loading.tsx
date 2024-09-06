import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div>
      <div className="grid grid-rows-1 lg:grid-cols-[1fr_auto] max-w-6xl w-full mx-auto px-4 gap-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-8">
          <Skeleton className="w-full h-16 mt-2" />
          <Skeleton className="w-full h-16 mt-2" />
        </div>
      </div>
    </div>
  )
}
