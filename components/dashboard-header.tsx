import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Zap, LogOut, User, Trophy, BarChart3, Target, ShoppingBag, BookOpen } from "lucide-react"
import Link from "next/link"
import { signOut } from "@/app/actions/auth"

interface DashboardHeaderProps {
  user: {
    full_name: string
    email: string
    avatar_url?: string
    role: string
  }
}

export function DashboardHeader({ user }: DashboardHeaderProps) {
  const initials = user.full_name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  return (
    <header className="border-b border-border bg-surface sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={
          user.role === "admin" ? "/admin" :
          user.role === "teacher" ? "/tutor" :
          "/dashboard"
        } className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-foreground">REEP</span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link href="/challenges">
            <Button variant="ghost" size="sm">
              <Target className="w-4 h-4 mr-2" />
              Challenges
            </Button>
          </Link>

          <Link href="/shop">
            <Button variant="ghost" size="sm">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Shop
            </Button>
          </Link>

          <Link href="/leaderboard">
            <Button variant="ghost" size="sm">
              <Trophy className="w-4 h-4 mr-2" />
              Leaderboard
            </Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar>
                  <AvatarImage src={user.avatar_url || "/placeholder.svg"} />
                  <AvatarFallback className="bg-primary text-white">{initials}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium">{user.full_name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile" className="cursor-pointer">
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </Link>
              </DropdownMenuItem>
              {user.role === "admin" && (
                <>
                  <DropdownMenuItem asChild>
                    <Link href="/admin" className="cursor-pointer">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Admin Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/admin/analytics" className="cursor-pointer">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Analytics
                    </Link>
                  </DropdownMenuItem>
                </>
              )}
              {user.role === "teacher" && (
                <DropdownMenuItem asChild>
                  <Link href="/tutor" className="cursor-pointer">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Tutor Dashboard
                  </Link>
                </DropdownMenuItem>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <form action={signOut} className="w-full">
                  <button type="submit" className="flex items-center w-full cursor-pointer">
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </button>
                </form>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  )
}
