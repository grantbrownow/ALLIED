"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function CRMLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [showForgotPassword, setShowForgotPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simple validation for demo credentials
    if (email === "kilroydemo@gmail.com" && password === "password123") {
      // Redirect to dashboard
      router.push("/crm-dashboard")
    } else {
      setError("Invalid credentials. Please use the demo account.")
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="w-full max-w-md mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold">ALLIED Wrecking CRM</h1>
            <p className="text-muted-foreground mt-2">Sign in to access your dashboard</p>
          </div>
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            {error && <div className="mb-4 p-3 bg-red-50 rounded-md text-sm text-red-700">{error}</div>}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm text-primary hover:underline"
                  onClick={() => setShowForgotPassword(!showForgotPassword)}
                >
                  Forgot password?
                </button>
              </div>
              {showForgotPassword && (
                <div className="p-3 bg-amber-50 rounded-md text-sm">
                  <p className="font-medium text-amber-800">Password Reset:</p>
                  <p className="text-amber-700">
                    Please contact Grant at{" "}
                    <a href="tel:3528959359" className="font-medium underline">
                      352-895-9359
                    </a>{" "}
                    to change your password.
                  </p>
                </div>
              )}
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
