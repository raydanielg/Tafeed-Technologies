"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import {
  getUser,
  createUser,
  updateUserPassword,
  createPasswordReset,
  getPasswordReset,
  deletePasswordReset,
} from "@/lib/db"
import bcrypt from "bcryptjs"
import crypto from "crypto"

export async function login(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  if (!email || !password) {
    return { error: "Email and password are required" }
  }

  try {
    const user = await getUser(email)

    if (!user) {
      return { error: "Invalid email or password" }
    }

    if (user.approval_status !== "approved") {
      return { error: "Your account is pending approval" }
    }

    if (!user.is_active) {
      return { error: "Your account is inactive" }
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      return { error: "Invalid email or password" }
    }

    // Create a session token
    const sessionToken = crypto.randomUUID()

    // Store session in cookies
    cookies().set("session_token", sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    })

    // Store user role in cookies
    cookies().set("user_role", user.role_name, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    })

    // Redirect based on role
    if (user.role_name === "admin") {
      redirect("/admin/dashboard")
    } else {
      redirect("/staff/dashboard")
    }
  } catch (error) {
    console.error("Login error:", error)
    return { error: "An error occurred during login" }
  }
}

export async function signup(formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const department = formData.get("department") as string
  const position = formData.get("position") as string
  const reason = formData.get("reason") as string
  const password = formData.get("password") as string
  const confirmPassword = formData.get("confirmPassword") as string

  if (!firstName || !lastName || !email || !department || !position || !reason || !password || !confirmPassword) {
    return { error: "All fields are required" }
  }

  if (password !== confirmPassword) {
    return { error: "Passwords do not match" }
  }

  if (password.length < 8) {
    return { error: "Password must be at least 8 characters long" }
  }

  if (!email.endsWith("@tafeedtech.com")) {
    return { error: "Please use a @tafeedtech.com email address" }
  }

  try {
    const existingUser = await getUser(email)

    if (existingUser) {
      return { error: "Email already exists" }
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user
    await createUser({
      first_name: firstName,
      last_name: lastName,
      email,
      password: hashedPassword,
      department,
      position,
      approval_reason: reason,
    })

    return { success: true }
  } catch (error) {
    console.error("Signup error:", error)
    return { error: "An error occurred during signup" }
  }
}

export async function logout() {
  cookies().delete("session_token")
  cookies().delete("user_role")
  redirect("/staff/login")
}

export async function forgotPassword(formData: FormData) {
  const email = formData.get("email") as string

  if (!email) {
    return { error: "Email is required" }
  }

  if (!email.endsWith("@tafeedtech.com")) {
    return { error: "Please use a @tafeedtech.com email address" }
  }

  try {
    const user = await getUser(email)

    if (!user) {
      // Don't reveal that the user doesn't exist
      return { success: true }
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString("hex")

    // Store token in database
    await createPasswordReset(email, resetToken)

    // In a real application, send an email with the reset link
    // For now, we'll just return success

    return { success: true }
  } catch (error) {
    console.error("Forgot password error:", error)
    return { error: "An error occurred" }
  }
}

export async function resetPassword(token: string, formData: FormData) {
  const password = formData.get("password") as string
  const confirmPassword = formData.get("confirmPassword") as string

  if (!password || !confirmPassword) {
    return { error: "All fields are required" }
  }

  if (password !== confirmPassword) {
    return { error: "Passwords do not match" }
  }

  if (password.length < 8) {
    return { error: "Password must be at least 8 characters long" }
  }

  try {
    const resetRequest = await getPasswordReset(token)

    if (!resetRequest) {
      return { error: "Invalid or expired reset token" }
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Update user password
    await updateUserPassword(resetRequest.email, hashedPassword)

    // Delete used token
    await deletePasswordReset(token)

    return { success: true }
  } catch (error) {
    console.error("Reset password error:", error)
    return { error: "An error occurred" }
  }
}
