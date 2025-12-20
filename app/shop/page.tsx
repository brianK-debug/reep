import { getCurrentUser } from "@/app/actions/auth"
import { redirect } from "next/navigation"
import sql from "@/lib/db"
import { DashboardHeader } from "@/components/dashboard-header"
import { PowerUpCard } from "@/components/power-up-card"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ShoppingBag } from "lucide-react"

export default async function ShopPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/sign-in")
  }

  // Fetch user's current points
  const userData = await sql`
    SELECT points FROM users WHERE id = ${user.id}
  `
  const userPoints = userData[0]?.points || 0

  // Fetch available power-ups
  const powerUps = await sql`
    SELECT * FROM power_ups ORDER BY cost_points ASC
  `

  // Fetch user's active power-ups
  const activePowerUps = await sql`
    SELECT 
      upu.*,
      pu.name,
      pu.description,
      pu.effect_type
    FROM user_power_ups upu
    JOIN power_ups pu ON upu.power_up_id = pu.id
    WHERE upu.user_id = ${user.id}
      AND upu.is_active = true
      AND upu.expires_at > NOW()
    ORDER BY upu.expires_at ASC
  `

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader user={user} />

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-foreground">Power-Up Shop</h1>
            <p className="text-muted-foreground">Spend your points on special power-ups to boost your learning</p>
          </div>
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="p-4 flex items-center gap-3">
              <Star className="w-6 h-6 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Your Points</p>
                <p className="text-2xl font-bold text-foreground">{userPoints}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {activePowerUps.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Active Power-Ups</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activePowerUps.map((powerUp) => {
                const timeRemaining = Math.ceil(
                  (new Date(powerUp.expires_at).getTime() - new Date().getTime()) / (1000 * 60 * 60),
                )
                return (
                  <Card key={powerUp.id} className="border-accent/30 bg-gradient-to-br from-accent/10 to-transparent">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg text-foreground mb-2">{powerUp.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{powerUp.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-accent font-medium">Active</span>
                        <span className="text-muted-foreground">{timeRemaining}h remaining</span>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>
        )}

        <section>
          <h2 className="text-2xl font-bold mb-6 text-foreground">Available Power-Ups</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {powerUps.map((powerUp, index) => (
              <PowerUpCard key={powerUp.id} powerUp={powerUp} userPoints={userPoints} userId={user.id} index={index} />
            ))}
          </div>
        </section>

        {powerUps.length === 0 && (
          <Card className="p-12 text-center">
            <ShoppingBag className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">No power-ups available at the moment</p>
          </Card>
        )}
      </main>
    </div>
  )
}
