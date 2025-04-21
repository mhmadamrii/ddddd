"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Download,
  MoreHorizontal,
  Search,
  UserPlus,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { DashboardHeader } from "@/app/dashboard/components/dashboard-header"
import { DashboardShell } from "@/app/dashboard/components/dashboard-shell"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function StudentsPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)

  // Filter students based on search query and status
  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.id.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || student.status.toLowerCase() === statusFilter.toLowerCase()

    return matchesSearch && matchesStatus
  })

  // Pagination
  const studentsPerPage = 10
  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage)
  const paginatedStudents = filteredStudents.slice((currentPage - 1) * studentsPerPage, currentPage * studentsPerPage)

  const handleViewStudent = (id: string) => {
    router.push(`/dashboard/students/${id}`)
  }

  const handleEditStudent = (id: string) => {
    router.push(`/dashboard/students/${id}/edit`)
  }

  const handleDeleteStudent = (id: string) => {
    // In a real app, this would call an API to delete the student
    alert(`Delete student with ID: ${id}`)
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Students" text="Manage your students">
        <Link href="/dashboard/students/new">
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Add Student
          </Button>
        </Link>
      </DashboardHeader>

      <div className="flex flex-col space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search students..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-9"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="h-9 w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="on leave">On Leave</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm" className="h-9">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedStudents.length > 0 ? (
                paginatedStudents.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell className="font-medium">{student.id}</TableCell>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell>{student.class}</TableCell>
                    <TableCell>
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
                    </TableCell>
                    <TableCell>{student.joinedDate}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleViewStudent(student.id)}>
                            View details
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleEditStudent(student.id)}>
                            Edit student
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleDeleteStudent(student.id)}
                            className="text-destructive focus:text-destructive"
                          >
                            Delete student
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center">
                    No students found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        {filteredStudents.length > 0 && (
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Showing {(currentPage - 1) * studentsPerPage + 1} to{" "}
              {Math.min(currentPage * studentsPerPage, filteredStudents.length)} of {filteredStudents.length} students
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
                <ChevronsLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
              >
                <ChevronsRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </DashboardShell>
  )
}

// Sample student data
const students = [
  {
    id: "STU001",
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    class: "Computer Science",
    status: "Active",
    joinedDate: "Sep 15, 2023",
  },
  {
    id: "STU002",
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    class: "Mathematics",
    status: "Active",
    joinedDate: "Aug 22, 2023",
  },
  {
    id: "STU003",
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    class: "Physics",
    status: "On Leave",
    joinedDate: "Oct 5, 2023",
  },
  {
    id: "STU004",
    name: "William Kim",
    email: "william.kim@email.com",
    class: "Biology",
    status: "Inactive",
    joinedDate: "Jul 10, 2023",
  },
  {
    id: "STU005",
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    class: "Chemistry",
    status: "Active",
    joinedDate: "Sep 1, 2023",
  },
  {
    id: "STU006",
    name: "Ethan Johnson",
    email: "ethan.johnson@email.com",
    class: "Computer Science",
    status: "Active",
    joinedDate: "Aug 15, 2023",
  },
  {
    id: "STU007",
    name: "Ava Wilson",
    email: "ava.wilson@email.com",
    class: "Mathematics",
    status: "Active",
    joinedDate: "Sep 10, 2023",
  },
  {
    id: "STU008",
    name: "Noah Brown",
    email: "noah.brown@email.com",
    class: "Physics",
    status: "Inactive",
    joinedDate: "Jul 22, 2023",
  },
  {
    id: "STU009",
    name: "Mia Taylor",
    email: "mia.taylor@email.com",
    class: "Biology",
    status: "On Leave",
    joinedDate: "Oct 1, 2023",
  },
  {
    id: "STU010",
    name: "Liam Anderson",
    email: "liam.anderson@email.com",
    class: "Chemistry",
    status: "Active",
    joinedDate: "Aug 5, 2023",
  },
  {
    id: "STU011",
    name: "Charlotte Thomas",
    email: "charlotte.thomas@email.com",
    class: "Computer Science",
    status: "Active",
    joinedDate: "Sep 20, 2023",
  },
  {
    id: "STU012",
    name: "Benjamin Harris",
    email: "benjamin.harris@email.com",
    class: "Mathematics",
    status: "Active",
    joinedDate: "Jul 15, 2023",
  },
  {
    id: "STU013",
    name: "Amelia Clark",
    email: "amelia.clark@email.com",
    class: "Physics",
    status: "Inactive",
    joinedDate: "Aug 10, 2023",
  },
  {
    id: "STU014",
    name: "Henry Lewis",
    email: "henry.lewis@email.com",
    class: "Biology",
    status: "Active",
    joinedDate: "Sep 5, 2023",
  },
  {
    id: "STU015",
    name: "Emma Walker",
    email: "emma.walker@email.com",
    class: "Chemistry",
    status: "On Leave",
    joinedDate: "Oct 10, 2023",
  },
]
