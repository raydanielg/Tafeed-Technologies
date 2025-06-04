"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import {
  updateUserStatus,
  getPendingUsers,
  getServices,
  updateSetting,
  getSettings,
  getProjects,
  getBlogPosts,
  getTestimonials,
  getStats,
} from "@/lib/db"

// Middleware to check if user is admin
async function checkAdmin() {
  const role = cookies().get("user_role")?.value

  if (role !== "admin") {
    redirect("/staff/login")
  }
}

export async function getDashboardData() {
  await checkAdmin()

  try {
    const pendingUsers = await getPendingUsers()
    const services = await getServices()
    const projects = await getProjects(5)
    const blogPosts = await getBlogPosts(5)
    const testimonials = await getTestimonials()
    const stats = await getStats()
    const settings = await getSettings()

    return {
      pendingUsers,
      services,
      projects,
      blogPosts,
      testimonials,
      stats,
      settings,
      totalUsers: 24, // This would come from a real query in production
      activeProjects: 12, // This would come from a real query in production
    }
  } catch (error) {
    console.error("Error getting dashboard data:", error)
    return { error: "Failed to load dashboard data" }
  }
}

export async function approveUser(userId: number) {
  await checkAdmin()

  try {
    await updateUserStatus(userId, "approved")
    return { success: true }
  } catch (error) {
    console.error("Error approving user:", error)
    return { error: "Failed to approve user" }
  }
}

export async function rejectUser(userId: number) {
  await checkAdmin()

  try {
    await updateUserStatus(userId, "rejected")
    return { success: true }
  } catch (error) {
    console.error("Error rejecting user:", error)
    return { error: "Failed to reject user" }
  }
}

export async function updateSystemSetting(key: string, value: string) {
  await checkAdmin()

  try {
    await updateSetting(key, value)
    return { success: true }
  } catch (error) {
    console.error("Error updating setting:", error)
    return { error: "Failed to update setting" }
  }
}
