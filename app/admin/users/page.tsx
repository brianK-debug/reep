import { requireRole } from "@/lib/auth"
import { redirect } from "next/navigation"
import sql from "@/lib/db"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { ArrowLeft, Users } from "lucide-react"

export default async function AdminUsersPage() {
  try {
    const user = await requireRole("admin")

    // Fetch all users with stats
    const users = await sql`
      SELECT 
        u.id,
        u.email,
        u.full_name,
        u.role,
        u.avatar_url,
        u.points,
        u.level,
        u.created_at,
        COUNT(DISTINCT e.course_id) as enrolled_courses,
        COUNT(DISTINCT CASE WHEN e.status = 'completed' THEN e.course_id END) as completed_courses,
        COUNT(DISTINCT ub.badge_id) as badges_earned
      FROM users u
      LEFT JOIN enrollments e ON u.id = e.user_id
      LEFT JOIN user_badges ub ON u.id = ub.user_id
      GROUP BY u.id, u.email, u.full_name, u.role, u.avatar_url, u.points, u.level, u.created_at
      ORDER BY u.created_at DESC
    `

    return (
      <div className="min-h-screen bg-background">
        <DashboardHeader user={user} />

        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <Link href="/admin">
              <Button variant="ghost" size="sm" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-foreground mb-2">User Management</h1>
            <p className="text-lg text-muted-foreground">View and manage all platform users</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                All Users ({users.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {users.map((u) => {
                  const initials = u.full_name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()
                  const joinDate = new Date(u.created_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })

                  return (
                    <div
                      key={u.id}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-surface transition-colors"
                    >
                      <Avatar className="w-12 h-12 flex-shrink-0">
                        <AvatarImage src={u.avatar_url || "/placeholder.svg"} />
                        <AvatarFallback className="bg-primary text-white">{initials}</AvatarFallback>
                      </Avatar>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-semibold text-foreground truncate">{u.full_name}</p>
                          <Badge
                            variant={u.role === "admin" ? "default" : u.role === "teacher" ? "secondary" : "outline"}
                          >
                            {u.role}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{u.email}</p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <span>Level {u.level}</span>
                          <span>{u.points} points</span>
                          <span>{u.enrolled_courses} courses</span>
                          <span>{u.badges_earned} badges</span>
                        </div>
                      </div>

                      <div className="text-right flex-shrink-0">
                        <p className="text-sm font-medium text-foreground">
                          {u.completed_courses}/{u.enrolled_courses}
                        </p>
                        <p className="text-xs text-muted-foreground">Completed</p>
                        <p className="text-xs text-muted-foreground mt-1">Joined {joinDate}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    )
  } catch (error) {
    redirect("/dashboard")
  }
}
