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
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    status: "Active",
  },
  {
    id: "2",
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    status: "Active",
  },
  {
    id: "3",
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    status: "On Leave",
  },
  {
    id: "4",
    name: "William Kim",
    email: "william.kim@email.com",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    status: "Inactive",
  },
  {
    id: "5",
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3",
    status: "Active",
  },
]
