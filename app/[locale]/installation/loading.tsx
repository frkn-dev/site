import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex justify-center items-start min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] max-w-6xl w-full mx-auto px-4 gap-6 pt-6">
        <div className="flex flex-col space-y-4">
          <Skeleton className="w-48 h-8 lg:w-64 lg:h-10" />
          <Skeleton className="w-full h-6 lg:h-8" />
          <Skeleton className="w-full h-6 lg:h-8" />
          <Skeleton className="w-full h-6 lg:h-8" />
          <Skeleton className="w-full h-6 lg:h-8" />
          <Skeleton className="w-full h-6 lg:h-8" />
          <Skeleton className="w-full h-6 lg:h-8" />
        </div>

        <div className="flex flex-col space-y-4 lg:mt-0 mt-6">
          <Skeleton className="w-64 h-8 lg:h-10 mx-auto" />
          <Skeleton className="w-full h-6 lg:h-8" />
          <Skeleton className="w-full h-12 lg:h-14" />
        </div>
      </div>
    </div>
  )
}
