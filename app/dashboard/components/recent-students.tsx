import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function RecentStudents() {
  return (
    <div className="space-y-8">
      {recentStudents.map((student) => (
        <div key={student.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
            <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{student.name}</p>
            <p className="text-sm text-muted-foreground">{student.email}</p>
          </div>
          <div className="ml-auto">
            <Badge
              variant={
                student.status === "Active" ? "default" : student.status === "On Leave" ? "outline" : "secondary"
              }
            >
              {student.status}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  )
}

const recentStudents = [
  {
    id: "1",
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "Active",
  },
  {
    id: "2",
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "Active",
  },
  {
    id: "3",
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "On Leave",
  },
  {
    id: "4",
    name: "William Kim",
    email: "william.kim@email.com",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "Inactive",
  },
  {
    id: "5",
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "Active",
  },
]
