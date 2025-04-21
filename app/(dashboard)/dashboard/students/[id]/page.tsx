import Link from "next/link"
import { ArrowLeft, Calendar, Edit, Mail, MapPin, Phone, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/app/(dashboard)/dashboard/components/dashboard-header"
import { DashboardShell } from "@/app/(dashboard)/dashboard/components/dashboard-shell"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function StudentDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the student data based on the ID
  const student = {
    id: params.id,
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Student Ave, College Town, CT 12345",
    dateOfBirth: "1998-05-15",
    class: "Computer Science",
    status: "Active",
    joinedDate: "Sep 15, 2023",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    grades: [
      { subject: "Programming Fundamentals", grade: "A", semester: "Fall 2023" },
      { subject: "Data Structures", grade: "B+", semester: "Fall 2023" },
      { subject: "Computer Networks", grade: "A-", semester: "Fall 2023" },
      { subject: "Database Systems", grade: "A", semester: "Spring 2024" },
      { subject: "Web Development", grade: "A+", semester: "Spring 2024" },
    ],
    attendance: {
      present: 85,
      absent: 5,
      late: 10,
    },
  }

  return (
    <DashboardShell>
      <DashboardHeader heading={`Student: ${student.name}`} text={`ID: ${student.id}`}>
        <div className="flex space-x-2">
          <Link href="/dashboard/students">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Students
            </Button>
          </Link>
          <Link href={`/dashboard/students/${student.id}/edit`}>
            <Button size="sm">
              <Edit className="mr-2 h-4 w-4" />
              Edit Student
            </Button>
          </Link>
        </div>
      </DashboardHeader>

      <div className="grid gap-4 md:grid-cols-[1fr_3fr]">
        <Card>
          <CardHeader>
            <CardTitle>Student Profile</CardTitle>
            <CardDescription>Basic information about the student</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
              <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h3 className="text-lg font-medium">{student.name}</h3>
              <p className="text-sm text-muted-foreground">{student.email}</p>
              <Badge
                className="mt-2"
                variant={
                  student.status === "Active" ? "default" : student.status === "On Leave" ? "outline" : "secondary"
                }
              >
                {student.status}
              </Badge>
            </div>
            <div className="w-full space-y-2 pt-4">
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-sm">ID: {student.id}</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{student.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{student.phone}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-sm">DOB: {student.dateOfBirth}</span>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-2 h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                <span className="text-sm">{student.address}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Tabs defaultValue="academic" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="academic">Academic Record</TabsTrigger>
              <TabsTrigger value="attendance">Attendance</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
            </TabsList>
            <TabsContent value="academic" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Academic Performance</CardTitle>
                  <CardDescription>Student's grades and academic achievements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Current Class</h4>
                      <p>{student.class}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Grades</h4>
                      <div className="rounded-md border">
                        <table className="min-w-full divide-y divide-border">
                          <thead>
                            <tr className="divide-x divide-border">
                              <th className="px-4 py-3.5 text-left text-sm font-semibold">Subject</th>
                              <th className="px-4 py-3.5 text-left text-sm font-semibold">Grade</th>
                              <th className="px-4 py-3.5 text-left text-sm font-semibold">Semester</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border">
                            {student.grades.map((grade, index) => (
                              <tr key={index} className="divide-x divide-border">
                                <td className="px-4 py-3.5 text-sm">{grade.subject}</td>
                                <td className="px-4 py-3.5 text-sm">{grade.grade}</td>
                                <td className="px-4 py-3.5 text-sm">{grade.semester}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="attendance" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Attendance Record</CardTitle>
                  <CardDescription>Student's attendance statistics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="rounded-lg border p-4 text-center">
                        <div className="text-2xl font-bold text-primary">{student.attendance.present}%</div>
                        <div className="text-sm text-muted-foreground">Present</div>
                      </div>
                      <div className="rounded-lg border p-4 text-center">
                        <div className="text-2xl font-bold text-destructive">{student.attendance.absent}%</div>
                        <div className="text-sm text-muted-foreground">Absent</div>
                      </div>
                      <div className="rounded-lg border p-4 text-center">
                        <div className="text-2xl font-bold text-yellow-500">{student.attendance.late}%</div>
                        <div className="text-sm text-muted-foreground">Late</div>
                      </div>
                    </div>
                    <div className="pt-4">
                      <h4 className="text-sm font-medium mb-2">Recent Attendance</h4>
                      <div className="rounded-md border">
                        <table className="min-w-full divide-y divide-border">
                          <thead>
                            <tr className="divide-x divide-border">
                              <th className="px-4 py-3.5 text-left text-sm font-semibold">Date</th>
                              <th className="px-4 py-3.5 text-left text-sm font-semibold">Status</th>
                              <th className="px-4 py-3.5 text-left text-sm font-semibold">Class</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border">
                            <tr className="divide-x divide-border">
                              <td className="px-4 py-3.5 text-sm">April 20, 2025</td>
                              <td className="px-4 py-3.5 text-sm">
                                <Badge variant="default">Present</Badge>
                              </td>
                              <td className="px-4 py-3.5 text-sm">Programming Fundamentals</td>
                            </tr>
                            <tr className="divide-x divide-border">
                              <td className="px-4 py-3.5 text-sm">April 19, 2025</td>
                              <td className="px-4 py-3.5 text-sm">
                                <Badge variant="default">Present</Badge>
                              </td>
                              <td className="px-4 py-3.5 text-sm">Data Structures</td>
                            </tr>
                            <tr className="divide-x divide-border">
                              <td className="px-4 py-3.5 text-sm">April 18, 2025</td>
                              <td className="px-4 py-3.5 text-sm">
                                <Badge variant="secondary">Absent</Badge>
                              </td>
                              <td className="px-4 py-3.5 text-sm">Computer Networks</td>
                            </tr>
                            <tr className="divide-x divide-border">
                              <td className="px-4 py-3.5 text-sm">April 17, 2025</td>
                              <td className="px-4 py-3.5 text-sm">
                                <Badge variant="outline">Late</Badge>
                              </td>
                              <td className="px-4 py-3.5 text-sm">Database Systems</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="notes" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Student Notes</CardTitle>
                  <CardDescription>Additional information and notes about the student</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-medium">Academic Advisor Note</h4>
                        <span className="text-xs text-muted-foreground">April 10, 2025</span>
                      </div>
                      <p className="text-sm">
                        Olivia is showing excellent progress in her programming courses. She has expressed interest in
                        pursuing advanced studies in artificial intelligence and machine learning.
                      </p>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-medium">Financial Aid Note</h4>
                        <span className="text-xs text-muted-foreground">March 15, 2025</span>
                      </div>
                      <p className="text-sm">
                        Scholarship renewal for the upcoming academic year has been approved. Student has maintained the
                        required GPA for continued eligibility.
                      </p>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-medium">Instructor Note</h4>
                        <span className="text-xs text-muted-foreground">February 28, 2025</span>
                      </div>
                      <p className="text-sm">
                        Olivia demonstrated exceptional problem-solving skills during the recent programming
                        competition. Recommend considering her for the advanced algorithms course next semester.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </DashboardShell>
  )
}
