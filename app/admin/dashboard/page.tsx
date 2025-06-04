"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Users,
  Settings,
  FileText,
  BarChart3,
  Shield,
  Mail,
  CheckCircle,
  XCircle,
  Clock,
  LogOut,
  UserPlus,
  MessageSquare,
  Globe,
  Smartphone,
  Server,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const pendingUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@tafeedtech.com",
    department: "Development",
    position: "Frontend Developer",
    requestDate: "2024-01-15",
    reason: "Need access to project management tools and development resources",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    email: "sarah.wilson@tafeedtech.com",
    department: "Design",
    position: "UI/UX Designer",
    requestDate: "2024-01-14",
    reason: "Require access to design assets and collaboration tools",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.brown@tafeedtech.com",
    department: "Marketing",
    position: "Digital Marketer",
    requestDate: "2024-01-13",
    reason: "Need access to analytics and marketing automation tools",
  },
]

const recentActivity = [
  { action: "User login", user: "admin@tafeedtech.com", time: "2 minutes ago" },
  { action: "New user request", user: "john.doe@tafeedtech.com", time: "1 hour ago" },
  { action: "Content updated", user: "admin@tafeedtech.com", time: "3 hours ago" },
  { action: "User approved", user: "sarah.wilson@tafeedtech.com", time: "1 day ago" },
]

export default function AdminDashboard() {
  const [pendingRequests, setPendingRequests] = useState(pendingUsers)

  const handleApproveUser = (userId: number) => {
    setPendingRequests((prev) => prev.filter((user) => user.id !== userId))
    // Here you would typically make an API call to approve the user
  }

  const handleRejectUser = (userId: number) => {
    setPendingRequests((prev) => prev.filter((user) => user.id !== userId))
    // Here you would typically make an API call to reject the user
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-muted/30">
        {/* Header */}
        <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-8">
          <div className="container">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
                <p className="text-red-100">Manage users, content, and system settings</p>
              </div>
              <div className="flex items-center gap-4">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  Administrator
                </Badge>
                <Link href="/staff/login">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Content */}
        <section className="py-8">
          <div className="container">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                      <p className="text-2xl font-bold">24</p>
                    </div>
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Pending Requests</p>
                      <p className="text-2xl font-bold">{pendingRequests.length}</p>
                    </div>
                    <Clock className="h-8 w-8 text-orange-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Active Projects</p>
                      <p className="text-2xl font-bold">12</p>
                    </div>
                    <FileText className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">System Status</p>
                      <p className="text-2xl font-bold text-green-600">Online</p>
                    </div>
                    <Shield className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Tabs */}
            <Tabs defaultValue="users" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="users">User Management</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>

              {/* User Management Tab */}
              <TabsContent value="users" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <UserPlus className="h-5 w-5" />
                      Pending User Requests
                    </CardTitle>
                    <CardDescription>Review and approve new staff account requests</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {pendingRequests.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">
                        <UserPlus className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>No pending user requests</p>
                      </div>
                    ) : (
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Department</TableHead>
                            <TableHead>Position</TableHead>
                            <TableHead>Request Date</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {pendingRequests.map((user) => (
                            <TableRow key={user.id}>
                              <TableCell className="font-medium">{user.name}</TableCell>
                              <TableCell>{user.email}</TableCell>
                              <TableCell>{user.department}</TableCell>
                              <TableCell>{user.position}</TableCell>
                              <TableCell>{user.requestDate}</TableCell>
                              <TableCell>
                                <div className="flex gap-2">
                                  <Button
                                    size="sm"
                                    onClick={() => handleApproveUser(user.id)}
                                    className="bg-green-600 hover:bg-green-700"
                                  >
                                    <CheckCircle className="h-4 w-4 mr-1" />
                                    Approve
                                  </Button>
                                  <Button size="sm" variant="destructive" onClick={() => handleRejectUser(user.id)}>
                                    <XCircle className="h-4 w-4 mr-1" />
                                    Reject
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Content Management Tab */}
              <TabsContent value="content" className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Globe className="h-5 w-5" />
                        Website Content
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Manage homepage, about page, and other website content
                      </p>
                      <Button className="w-full">Edit Website</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Blog Posts
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Create and manage blog articles and news updates
                      </p>
                      <Button className="w-full">Manage Blog</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Smartphone className="h-5 w-5" />
                        Services
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Update service descriptions, pricing, and features
                      </p>
                      <Button className="w-full">Edit Services</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Analytics Tab */}
              <TabsContent value="analytics" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BarChart3 className="h-5 w-5" />
                        Website Analytics
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span>Page Views (This Month)</span>
                          <span className="font-bold">12,543</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Unique Visitors</span>
                          <span className="font-bold">3,421</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Contact Form Submissions</span>
                          <span className="font-bold">89</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MessageSquare className="h-5 w-5" />
                        Lead Generation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span>WhatsApp Clicks</span>
                          <span className="font-bold">156</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Quote Requests</span>
                          <span className="font-bold">43</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Newsletter Signups</span>
                          <span className="font-bold">67</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Settings className="h-5 w-5" />
                        System Settings
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button className="w-full" variant="outline">
                        <Mail className="mr-2 h-4 w-4" />
                        Email Configuration
                      </Button>
                      <Button className="w-full" variant="outline">
                        <Shield className="mr-2 h-4 w-4" />
                        Security Settings
                      </Button>
                      <Button className="w-full" variant="outline">
                        <Server className="mr-2 h-4 w-4" />
                        Server Configuration
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Company Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button className="w-full" variant="outline">
                        Edit Contact Details
                      </Button>
                      <Button className="w-full" variant="outline">
                        Update Social Media
                      </Button>
                      <Button className="w-full" variant="outline">
                        Manage Team Members
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Activity Tab */}
              <TabsContent value="activity" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Monitor system activity and user actions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <p className="font-medium">{activity.action}</p>
                            <p className="text-sm text-muted-foreground">{activity.user}</p>
                          </div>
                          <span className="text-sm text-muted-foreground">{activity.time}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
