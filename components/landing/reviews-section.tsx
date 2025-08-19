import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getScopedI18n } from "@/shared/locales/server"
import * as Avatar from "@radix-ui/react-avatar"
import { reviews } from "../../shared/reviews"
import { PageSection } from "../page-section"

export async function ReviewsSection() {
  const t = await getScopedI18n("reviews")

  return (
    <PageSection className="md:py-8">
      <h2 className="w-fit mx-auto py-8 font-mono font-bold text-4xl">
        {t("reviews")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review, index) => (
          <Card key={index} className="mb-4">
            <CardHeader>
              <div className="flex items-center">
                <Avatar.Root className="w-10 h-10 rounded-full mr-3">
                  <Avatar.Image src={review.avatar} alt={review.name} />
                  <Avatar.Fallback className="w-full h-full rounded-full flex items-center justify-center bg-gray-200 border border-gray-300 text-gray-600 font-medium">
                    {review.name[0]}
                  </Avatar.Fallback>
                </Avatar.Root>
                <div>
                  <CardTitle>{review.name}</CardTitle>
                  <span className="text-sm text-gray-500">
                    {review.username}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>{review.content}</CardDescription>
              <div className="text-sm text-gray-400 mt-2">{review.time}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageSection>
  )
}
