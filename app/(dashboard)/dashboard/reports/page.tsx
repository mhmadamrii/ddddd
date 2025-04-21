import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "@/app/(dashboard)/dashboard/components/dashboard-header"
import { DashboardShell } from "@/app/(dashboard)/dashboard/components/dashboard-shell"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart } from "lucide-react"

export default function ReportsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Reports" text="View and analyze institution data">
        <Tabs defaultValue="enrollment">
          <TabsList>
            <TabsTrigger value="enrollment">Enrollment</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
          </TabsList>
        </Tabs>
      </DashboardHeader>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Report Types</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <BarChart className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Enrollment Reports</p>
                  <p className="text-xs text-muted-foreground">Student enrollment trends and statistics</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <LineChart className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Performance Reports</p>
                  <p className="text-xs text-muted-foreground">Academic performance and grades analysis</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <PieChart className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Attendance Reports</p>
                  <p className="text-xs text-muted-foreground">Student attendance patterns and statistics</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Report Overview</CardTitle>
            <CardDescription>Select a report type to view detailed analytics</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center">
            <div className="text-center">
              <p className="text-muted-foreground">Select a report type from the tabs above to view data</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Reports</CardTitle>
            <CardDescription>Your recently generated reports</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="font-medium">End of Semester Performance Report</p>
                  <p className="text-sm text-muted-foreground">Generated on April 15, 2025</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">PDF</span>
                </div>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="font-medium">Monthly Attendance Summary</p>
                  <p className="text-sm text-muted-foreground">Generated on April 10, 2025</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Excel</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Quarterly Enrollment Statistics</p>
                  <p className="text-sm text-muted-foreground">Generated on April 1, 2025</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">PDF</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}
