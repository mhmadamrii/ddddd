"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, BookOpen, GraduationCap, Home, Settings, Users, LogOut } from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(`${path}/`)
  }

  return (
    <div className="hidden border-r bg-muted/40 md:block md:w-64">
      <div className="flex h-full flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
            <GraduationCap className="h-6 w-6" />
            <span>EduManage</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-2 text-sm font-medium">
            <Link
              href="/dashboard"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive("/dashboard") && !isActive("/dashboard/students") && !isActive("/dashboard/classes")
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`}
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/students"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive("/dashboard/students") ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              }`}
            >
              <Users className="h-4 w-4" />
              Students
            </Link>
            <Link
              href="/dashboard/classes"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive("/dashboard/classes") ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              }`}
            >
              <BookOpen className="h-4 w-4" />
              Classes
            </Link>
            <Link
              href="/dashboard/reports"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive("/dashboard/reports") ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              }`}
            >
              <BarChart3 className="h-4 w-4" />
              Reports
            </Link>
            <Link
              href="/dashboard/settings"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive("/dashboard/settings") ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              }`}
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-4 border-t">
          <Link
            href="/"
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Link>
        </div>
      </div>
    </div>
  )
}
