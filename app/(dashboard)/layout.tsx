import type React from "react"
import { Sidebar } from "@/app/components/sidebar"
import { DashboardNav } from "@/app/(dashboard)/components/dashboard-nav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardNav />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}
