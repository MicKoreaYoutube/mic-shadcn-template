import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

export default function DashboardMainPage() {
  return (
    <>
      {[...Array(70).keys()].map((item) => (
        <Card className="w-full rounded-2xl shadow-sm transition-shadow hover:shadow-md my-4" key={item}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <ArrowUpRight className="text-muted-foreground size-5" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{item}</div>
            <p className="text-muted-foreground mt-1 text-xs">+12.5% from last month</p>
          </CardContent>
        </Card>
      ))}
    </>
  )
}
