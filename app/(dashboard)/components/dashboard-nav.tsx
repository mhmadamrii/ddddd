"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Bell, BookOpen, GraduationCap, Home, Menu, Search, Settings, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

export function DashboardNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  const routes = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: Home,
      active: pathname === "/dashboard",
    },
    {
      href: "/dashboard/students",
      label: "Students",
      icon: Users,
      active: pathname?.startsWith("/dashboard/students"),
    },
    {
      href: "/dashboard/classes",
      label: "Classes",
      icon: BookOpen,
      active: pathname?.startsWith("/dashboard/classes"),
    },
    {
      href: "/dashboard/reports",
      label: "Reports",
      icon: BarChart3,
      active: pathname?.startsWith("/dashboard/reports"),
    },
    {
      href: "/dashboard/settings",
      label: "Settings",
      icon: Settings,
      active: pathname?.startsWith("/dashboard/settings"),
    },
  ]

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <div className="flex flex-col space-y-4 px-4">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  <GraduationCap className="h-6 w-6" />
                  <span>EduManage</span>
                </Link>
                <div className="flex flex-col space-y-3">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        route.active ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <route.icon className="h-4 w-4" />
                      {route.label}
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <Link href="/dashboard" className="mr-6 flex items-center gap-2 font-semibold md:hidden">
          <GraduationCap className="h-6 w-6" />
          <span>EduManage</span>
        </Link>
        <div className="hidden md:flex md:flex-1 md:items-center md:gap-4 md:px-4">
          <nav className="flex items-center space-x-4 lg:space-x-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                  route.active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <route.icon className="h-4 w-4" />
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="hidden md:flex md:w-64 md:mr-4">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full bg-background pl-8 md:w-[200px] lg:w-[300px]"
              />
            </div>
          </div>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
              3
            </span>
            <span className="sr-only">Notifications</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="User"
                  />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Admin User</p>
                  <p className="text-xs leading-none text-muted-foreground">admin@example.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/dashboard/profile" className="flex w-full">
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/dashboard/settings" className="flex w-full">
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/" className="flex w-full">
                  Log out
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
