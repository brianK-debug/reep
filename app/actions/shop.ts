"use server"

import sql from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function purchasePowerUp(formData: FormData) {
  const powerUpId = Number.parseInt(formData.get("powerUpId") as string)
  const userId = Number.parseInt(formData.get("userId") as string)

  try {
    // Get power-up details
    const powerUps = await sql`
      SELECT * FROM power_ups WHERE id = ${powerUpId}
    `

    if (powerUps.length === 0) {
      return { success: false, error: "Power-up not found" }
    }

    const powerUp = powerUps[0]

    // Check if user has enough points
    const users = await sql`
      SELECT points FROM users WHERE id = ${userId}
    `

    if (users.length === 0) {
      return { success: false, error: "User not found" }
    }

    const userPoints = users[0].points

    if (userPoints < powerUp.cost_points) {
      return { success: false, error: "Not enough points" }
    }

    // Deduct points
    await sql`
      UPDATE users 
      SET points = points - ${powerUp.cost_points}
      WHERE id = ${userId}
    `

    // Activate power-up
    const expiresAt = new Date()
    expiresAt.setHours(expiresAt.getHours() + powerUp.duration_hours)

    await sql`
      INSERT INTO user_power_ups (user_id, power_up_id, activated_at, expires_at, is_active)
      VALUES (${userId}, ${powerUpId}, NOW(), ${expiresAt.toISOString()}, true)
    `

    // Create achievement
    await sql`
      INSERT INTO achievements (user_id, type, title, description, points_earned)
      VALUES (
        ${userId}, 
        'power_up_purchased', 
        'Power-Up Activated',
        ${`Purchased ${powerUp.name}`},
        0
      )
    `

    revalidatePath("/shop")
    return { success: true }
  } catch (error) {
    console.error("[v0] Purchase power-up error:", error)
    return { success: false, error: "Failed to purchase power-up" }
  }
}
