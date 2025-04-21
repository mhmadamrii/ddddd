import Link from "next/link"
import { ArrowLeft, Calendar, Edit, GraduationCap, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/app/(dashboard)/dashboard/components/dashboard-header"
import { DashboardShell } from "@/app/(dashboard)/dashboard/components/dashboard-shell"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ClassDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the class data based on the ID
  const classData = {
    id: params.id,
    name: "Introduction to Computer Science",
    instructor: "Dr. Alan Turing",
    department: "Computer Science",
    students: 32,
    maxStudents: 35,
    schedule: "Mon, Wed, Fri 10:00 AM - 11:30 AM",
    location: "Room 101, Computer Science Building",
    startDate: "January 15, 2025",
    endDate: "May 15, 2025",
    status: "Active",
    description:
      "An introductory course to computer science principles, programming fundamentals, and problem-solving techniques. Students will learn basic programming concepts using Python.",
    enrolledStudents: [
      {
        id: "STU001",
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        status: "Active",
      },
      {
        id: "STU002",
        name: "Jackson Lee",
        email: "jackson.lee@email.com",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        status: "Active",
      },
      {
        id: "STU003",
        name: "Isabella Nguyen",
        email: "isabella.nguyen@email.com",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        status: "On Leave",
      },
      {
        id: "STU004",
        name: "William Kim",
        email: "william.kim@email.com",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        status: "Active",
      },
    ],
  }

  return (
    <DashboardShell>
      <DashboardHeader heading={`Class: ${classData.name}`} text={`ID: ${classData.id}`}>
        <div className="flex space-x-2">
          <Link href="/dashboard/classes">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Classes
            </Button>
          </Link>
          <Link href={`/dashboard/classes/${classData.id}/edit`}>
            <Button size="sm">
              <Edit className="mr-2 h-4 w-4" />
              Edit Class
            </Button>
          </Link>
        </div>
      </DashboardHeader>

      <div className="grid gap-4 md:grid-cols-[1fr_3fr]">
        <Card>
          <CardHeader>
            <CardTitle>Class Information</CardTitle>
            <CardDescription>Basic details about the class</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge
                variant={
                  classData.status === "Active" ? "default" : classData.status === "Upcoming" ? "outline" : "secondary"
                }
              >
                {classData.status}
              </Badge>
              <span className="text-sm text-muted-foreground">
                {classData.students}/{classData.maxStudents} Students
              </span>
            </div>
            <div className="space-y-2 pt-2">
              <div className="flex items-center">
                <GraduationCap className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Instructor: {classData.instructor}</span>
              </div>
              <div className="flex items-center">
                <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Department: {classData.department}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Schedule: {classData.schedule}</span>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-2 h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                <span className="text-sm">Location: {classData.location}</span>
              </div>
              <div className="flex items-center pt-2">
                <span className="text-sm">Start Date: {classData.startDate}</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm">End Date: {classData.endDate}</span>
              </div>
            </div>
            <div className="pt-2">
              <h4 className="text-sm font-medium mb-1">Description</h4>
              <p className="text-sm text-muted-foreground">{classData.description}</p>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Tabs defaultValue="students" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="students">Enrolled Students</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
              <TabsTrigger value="materials">Materials</TabsTrigger>
            </TabsList>
            <TabsContent value="students" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Enrolled Students</CardTitle>
                  <CardDescription>Students currently enrolled in this class</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {classData.enrolledStudents.map((student) => (
                      <div key={student.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                            <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <Link href={`/dashboard/students/${student.id}`} className="font-medium hover:underline">
                              {student.name}
                            </Link>
                            <p className="text-sm text-muted-foreground">{student.email}</p>
                          </div>
                        </div>
                        <Badge
                          variant={
                            student.status === "Active"
                              ? "default"
                              : student.status === "On Leave"
                                ? "outline"
                                : "secondary"
                          }
                        >
                          {student.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="schedule" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Class Schedule</CardTitle>
                  <CardDescription>Weekly schedule and important dates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Weekly Schedule</h4>
                      <div className="rounded-md border">
                        <table className="min-w-full divide-y divide-border">
                          <thead>
                            <tr className="divide-x divide-border">
                              <th className="px-4 py-3.5 text-left text-sm font-semibold">Day</th>
                              <th className="px-4 py-3.5 text-left text-sm font-semibold">Time</th>
                              <th className="px-4 py-3.5 text-left text-sm font-semibold">Location</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border">
                            <tr className="divide-x divide-border">
                              <td className="px-4 py-3.5 text-sm">Monday</td>
                              <td className="px-4 py-3.5 text-sm">10:00 AM - 11:30 AM</td>
                              <td className="px-4 py-3.5 text-sm">Room 101, Computer Science Building</td>
                            </tr>
                            <tr className="divide-x divide-border">
                              <td className="px-4 py-3.5 text-sm">Wednesday</td>
                              <td className="px-4 py-3.5 text-sm">10:00 AM - 11:30 AM</td>
                              <td className="px-4 py-3.5 text-sm">Room 101, Computer Science Building</td>
                            </tr>
                            <tr className="divide-x divide-border">
                              <td className="px-4 py-3.5 text-sm">Friday</td>
                              <td className="px-4 py-3.5 text-sm">10:00 AM - 11:30 AM</td>
                              <td className="px-4 py-3.5 text-sm">Room 101, Computer Science Building</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Important Dates</h4>
                      <div className="rounded-md border">
                        <table className="min-w-full divide-y divide-border">
                          <thead>
                            <tr className="divide-x divide-border">
                              <th className="px-4 py-3.5 text-left text-sm font-semibold">Event</th>
                              <th className="px-4 py-3.5 text-left text-sm font-semibold">Date</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border">
                            <tr className="divide-x divide-border">
                              <td className="px-4 py-3.5 text-sm">Midterm Exam</td>
                              <td className="px-4 py-3.5 text-sm">March 10, 2025</td>
                            </tr>
                            <tr className="divide-x divide-border">
                              <td className="px-4 py-3.5 text-sm">Project Deadline</td>
                              <td className="px-4 py-3.5 text-sm">April 15, 2025</td>
                            </tr>
                            <tr className="divide-x divide-border">
                              <td className="px-4 py-3.5 text-sm">Final Exam</td>
                              <td className="px-4 py-3.5 text-sm">May 12, 2025</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="materials" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Course Materials</CardTitle>
                  <CardDescription>Textbooks, resources, and learning materials</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Required Textbooks</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li className="text-sm">
                          "Introduction to Computer Science with Python" by John Smith (Primary Textbook)
                        </li>
                        <li className="text-sm">"Algorithms and Data Structures" by Jane Doe</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Online Resources</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li className="text-sm">
                          <a href="#" className="text-primary hover:underline">
                            Course Website
                          </a>{" "}
                          - Contains lecture slides, assignments, and additional resources
                        </li>
                        <li className="text-sm">
                          <a href="#" className="text-primary hover:underline">
                            Python Documentation
                          </a>{" "}
                          - Official Python language documentation
                        </li>
                        <li className="text-sm">
                          <a href="#" className="text-primary hover:underline">
                            Practice Exercises
                          </a>{" "}
                          - Additional practice problems and solutions
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Recent Uploads</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between rounded-lg border p-3">
                          <div className="flex items-center space-x-3">
                            <div className="bg-primary/10 text-primary p-2 rounded-md">PDF</div>
                            <div>
                              <p className="text-sm font-medium">Lecture 10 - Object-Oriented Programming</p>
                              <p className="text-xs text-muted-foreground">Uploaded on April 18, 2025</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            Download
                          </Button>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border p-3">
                          <div className="flex items-center space-x-3">
                            <div className="bg-primary/10 text-primary p-2 rounded-md">ZIP</div>
                            <div>
                              <p className="text-sm font-medium">Assignment 5 - Data Structures</p>
                              <p className="text-xs text-muted-foreground">Uploaded on April 15, 2025</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            Download
                          </Button>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border p-3">
                          <div className="flex items-center space-x-3">
                            <div className="bg-primary/10 text-primary p-2 rounded-md">PDF</div>
                            <div>
                              <p className="text-sm font-medium">Midterm Study Guide</p>
                              <p className="text-xs text-muted-foreground">Uploaded on April 10, 2025</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            Download
                          </Button>
                        </div>
                      </div>
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
