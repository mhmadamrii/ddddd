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
  Plus,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { DashboardHeader } from "@/app/dashboard/components/dashboard-header"
import { DashboardShell } from "@/app/dashboard/components/dashboard-shell"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ClassesPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)

  // Filter classes based on search query and status
  const filteredClasses = classes.filter((cls) => {
    const matchesSearch =
      cls.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cls.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cls.id.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || cls.status.toLowerCase() === statusFilter.toLowerCase()

    return matchesSearch && matchesStatus
  })

  // Pagination
  const classesPerPage = 10
  const totalPages = Math.ceil(filteredClasses.length / classesPerPage)
  const paginatedClasses = filteredClasses.slice((currentPage - 1) * classesPerPage, currentPage * classesPerPage)

  const handleViewClass = (id: string) => {
    router.push(`/dashboard/classes/${id}`)
  }

  const handleEditClass = (id: string) => {
    router.push(`/dashboard/classes/${id}/edit`)
  }

  const handleDeleteClass = (id: string) => {
    // In a real app, this would call an API to delete the class
    alert(`Delete class with ID: ${id}`)
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Classes" text="Manage your classes">
        <Link href="/dashboard/classes/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Class
          </Button>
        </Link>
      </DashboardHeader>

      <div className="flex flex-col space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search classes..."
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
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
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
                <TableHead>Instructor</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Schedule</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedClasses.length > 0 ? (
                paginatedClasses.map((cls) => (
                  <TableRow key={cls.id}>
                    <TableCell className="font-medium">{cls.id}</TableCell>
                    <TableCell>{cls.name}</TableCell>
                    <TableCell>{cls.instructor}</TableCell>
                    <TableCell>{cls.students}</TableCell>
                    <TableCell>{cls.schedule}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          cls.status === "Active" ? "default" : cls.status === "Upcoming" ? "outline" : "secondary"
                        }
                      >
                        {cls.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleViewClass(cls.id)}>View details</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleEditClass(cls.id)}>Edit class</DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleDeleteClass(cls.id)}
                            className="text-destructive focus:text-destructive"
                          >
                            Delete class
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center">
                    No classes found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        {filteredClasses.length > 0 && (
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Showing {(currentPage - 1) * classesPerPage + 1} to{" "}
              {Math.min(currentPage * classesPerPage, filteredClasses.length)} of {filteredClasses.length} classes
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

// Sample class data
const classes = [
  {
    id: "CS101",
    name: "Introduction to Computer Science",
    instructor: "Dr. Alan Turing",
    students: 32,
    schedule: "Mon, Wed, Fri 10:00 AM",
    status: "Active",
  },
  {
    id: "MATH201",
    name: "Advanced Calculus",
    instructor: "Dr. Katherine Johnson",
    students: 28,
    schedule: "Tue, Thu 9:00 AM",
    status: "Active",
  },
  {
    id: "PHYS101",
    name: "Physics Fundamentals",
    instructor: "Dr. Richard Feynman",
    students: 35,
    schedule: "Mon, Wed 2:00 PM",
    status: "Active",
  },
  {
    id: "BIO202",
    name: "Molecular Biology",
    instructor: "Dr. Rosalind Franklin",
    students: 24,
    schedule: "Tue, Thu 1:00 PM",
    status: "Active",
  },
  {
    id: "CHEM101",
    name: "Introduction to Chemistry",
    instructor: "Dr. Marie Curie",
    students: 30,
    schedule: "Mon, Wed, Fri 11:00 AM",
    status: "Active",
  },
  {
    id: "CS202",
    name: "Data Structures and Algorithms",
    instructor: "Dr. Ada Lovelace",
    students: 26,
    schedule: "Tue, Thu 3:00 PM",
    status: "Upcoming",
  },
  {
    id: "MATH101",
    name: "Algebra Fundamentals",
    instructor: "Dr. Emmy Noether",
    students: 38,
    schedule: "Mon, Wed, Fri 9:00 AM",
    status: "Completed",
  },
  {
    id: "PHYS202",
    name: "Quantum Mechanics",
    instructor: "Dr. Niels Bohr",
    students: 22,
    schedule: "Tue, Thu 10:00 AM",
    status: "Upcoming",
  },
  {
    id: "BIO101",
    name: "Introduction to Biology",
    instructor: "Dr. Jane Goodall",
    students: 40,
    schedule: "Mon, Wed 1:00 PM",
    status: "Active",
  },
  {
    id: "CHEM202",
    name: "Organic Chemistry",
    instructor: "Dr. Linus Pauling",
    students: 25,
    schedule: "Tue, Thu 2:00 PM",
    status: "Active",
  },
  {
    id: "CS301",
    name: "Database Systems",
    instructor: "Dr. Grace Hopper",
    students: 28,
    schedule: "Mon, Wed, Fri 2:00 PM",
    status: "Upcoming",
  },
  {
    id: "MATH301",
    name: "Differential Equations",
    instructor: "Dr. Isaac Newton",
    students: 20,
    schedule: "Tue, Thu 11:00 AM",
    status: "Upcoming",
  },
]
