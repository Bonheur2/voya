'use client'

import { useState } from 'react'
import { ArrowLeft, Upload, Mail, Phone, MapPin, CheckCircle, Edit2, Save } from 'lucide-react'
import Link from 'next/link'
import { DashboardSidebar } from '@/components/site/dashboard-sidebar'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    firstName: 'Sofia',
    lastName: 'Martins',
    email: 'sofia.martins@example.com',
    phone: '+351 910 123 456',
    location: 'Porto, Portugal',
    bio: 'Weekend traveler who loves a good playlist and interesting conversation. I keep my car spotless and always leave on time.',
    carBrand: 'Volkswagen',
    carModel: 'Golf',
    carColor: 'Silver',
    carYear: '2021',
    carPlate: 'PT-21-AB-789',
    preferences: {
      chatty: true,
      music: true,
      pets: false,
      smoking: false,
    },
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as any
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement
      setFormData({
        ...formData,
        preferences: { ...formData.preferences, [name]: checkbox.checked },
      })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically save the changes to a backend
  }

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />

      <main className="flex-1">
        {/* Header */}
        <div className="border-b border-border bg-card sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="size-5" />
              </Link>
              <div>
                <h1 className="text-2xl font-extrabold text-foreground">Profile</h1>
                <p className="text-sm text-muted-foreground mt-1">Manage your account information</p>
              </div>
            </div>
            <button
              onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
              className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              {isEditing ? (
                <>
                  <Save className="size-4" />
                  Save Changes
                </>
              ) : (
                <>
                  <Edit2 className="size-4" />
                  Edit Profile
                </>
              )}
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* Profile Header */}
          <div className="rounded-2xl border border-border bg-card p-6 mb-6">
            <div className="flex items-start gap-6 mb-6">
              <div className="relative">
                <Avatar src="/images/avatar-1.png" alt="Profile" size={96} className="ring-4 ring-primary/20" />
                {isEditing && (
                  <button className="absolute bottom-0 right-0 p-2 bg-primary rounded-full text-background hover:bg-primary/90 transition-colors">
                    <Upload className="size-4" />
                  </button>
                )}
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-extrabold text-foreground mb-1">
                      {formData.firstName} {formData.lastName}
                    </h2>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-success/20 text-success border-0">
                        <CheckCircle className="size-3 mr-1" />
                        Verified Driver
                      </Badge>
                      <Badge variant="outline">Member since March 2021</Badge>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="size-4" />
                    {formData.email}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="size-4" />
                    {formData.phone}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground col-span-2">
                    <MapPin className="size-4" />
                    {formData.location}
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-3xl font-extrabold text-foreground">4.9</div>
                <p className="text-sm text-warning">★★★★★</p>
                <p className="text-xs text-muted-foreground mt-2">214 reviews</p>
              </div>
            </div>

            {isEditing && (
              <div className="space-y-4 pt-6 border-t border-border">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Bio</label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Tabs */}
          <Tabs defaultValue="vehicle" className="space-y-6">
            <TabsList>
              <TabsTrigger value="vehicle">Vehicle</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            {/* Vehicle Tab */}
            <TabsContent value="vehicle" className="space-y-4">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Vehicle Information</h3>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Brand & Model</p>
                    {isEditing ? (
                      <input
                        type="text"
                        value={`${formData.carBrand} ${formData.carModel}`}
                        className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground"
                        readOnly
                      />
                    ) : (
                      <p className="text-foreground font-medium">{formData.carBrand} {formData.carModel}</p>
                    )}
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Color</p>
                    {isEditing ? (
                      <input
                        type="text"
                        name="carColor"
                        value={formData.carColor}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    ) : (
                      <p className="text-foreground font-medium">{formData.carColor}</p>
                    )}
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Year</p>
                    {isEditing ? (
                      <input
                        type="text"
                        name="carYear"
                        value={formData.carYear}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    ) : (
                      <p className="text-foreground font-medium">{formData.carYear}</p>
                    )}
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">License Plate</p>
                    {isEditing ? (
                      <input
                        type="text"
                        name="carPlate"
                        value={formData.carPlate}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    ) : (
                      <p className="text-foreground font-medium">{formData.carPlate}</p>
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Preferences Tab */}
            <TabsContent value="preferences" className="space-y-4">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Driving Preferences</h3>
                <p className="text-sm text-muted-foreground mb-6">Let passengers know what to expect on your rides</p>

                <div className="space-y-3">
                  {[
                    { key: 'chatty', label: 'I like to chat', icon: '💬' },
                    { key: 'music', label: 'I enjoy music', icon: '🎵' },
                    { key: 'pets', label: 'I accept pets', icon: '🐕' },
                    { key: 'smoking', label: 'Smoking allowed', icon: '🚬' },
                  ].map((pref) => (
                    <label key={pref.key} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <input
                        type="checkbox"
                        name={pref.key}
                        checked={formData.preferences[pref.key as keyof typeof formData.preferences]}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="rounded border-border cursor-pointer"
                      />
                      <span className="text-sm">{pref.icon}</span>
                      <span className="text-sm font-medium text-foreground">{pref.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-4">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Account Settings</h3>

                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors text-left border border-border">
                    <span className="text-sm font-medium text-foreground">Change Password</span>
                    <ArrowLeft className="size-4 text-muted-foreground rotate-180" />
                  </button>

                  <button className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors text-left border border-border">
                    <span className="text-sm font-medium text-foreground">Privacy Settings</span>
                    <ArrowLeft className="size-4 text-muted-foreground rotate-180" />
                  </button>

                  <button className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors text-left border border-border">
                    <span className="text-sm font-medium text-foreground">Notification Preferences</span>
                    <ArrowLeft className="size-4 text-muted-foreground rotate-180" />
                  </button>

                  <button className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-destructive/10 transition-colors text-left border border-destructive/30">
                    <span className="text-sm font-medium text-destructive">Deactivate Account</span>
                    <ArrowLeft className="size-4 text-destructive rotate-180" />
                  </button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
