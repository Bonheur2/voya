'use client'

import { useState } from 'react'
import { Search, Send, Paperclip, MoreVertical } from 'lucide-react'
import { DashboardSidebar } from '@/components/site/dashboard-sidebar'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { drivers } from '@/lib/placeholder-data'
import { cn } from '@/lib/utils'

interface Conversation {
  id: string
  driverId: string
  lastMessage: string
  timestamp: string
  unread: boolean
  messages: { id: string; sender: 'user' | 'driver'; text: string; timestamp: string }[]
}

const mockConversations: Conversation[] = [
  {
    id: 'c1',
    driverId: 'sofia-m',
    lastMessage: 'Thanks for booking! Looking forward to meeting you.',
    timestamp: '2 hours ago',
    unread: true,
    messages: [
      {
        id: 'm1',
        sender: 'driver',
        text: 'Hi! I saw your booking for tomorrow. Just wanted to confirm you&apos;ll be ready at 8:30 am.',
        timestamp: '3 hours ago',
      },
      {
        id: 'm2',
        sender: 'user',
        text: 'Yes, I&apos;ll be ready!',
        timestamp: '2.5 hours ago',
      },
      {
        id: 'm3',
        sender: 'driver',
        text: 'Thanks for booking! Looking forward to meeting you.',
        timestamp: '2 hours ago',
      },
    ],
  },
  {
    id: 'c2',
    driverId: 'lucas-f',
    lastMessage: 'No problem, I have a phone charger you can use!',
    timestamp: '1 day ago',
    unread: false,
    messages: [
      {
        id: 'm4',
        sender: 'user',
        text: 'Do you have a phone charger in the car?',
        timestamp: '1 day ago',
      },
      {
        id: 'm5',
        sender: 'driver',
        text: 'No problem, I have a phone charger you can use!',
        timestamp: '1 day ago',
      },
    ],
  },
  {
    id: 'c3',
    driverId: 'tomas-r',
    lastMessage: 'See you this Friday!',
    timestamp: '3 days ago',
    unread: false,
    messages: [
      {
        id: 'm6',
        sender: 'driver',
        text: 'See you this Friday!',
        timestamp: '3 days ago',
      },
    ],
  },
]

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(mockConversations[0])
  const [messageText, setMessageText] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const driver = drivers.find((d) => d.id === selectedConversation.driverId)

  const filteredConversations = mockConversations.filter((conv) => {
    const driver = drivers.find((d) => d.id === conv.driverId)
    return driver?.name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />

      <main className="flex-1 flex overflow-hidden">
        {/* Conversations List */}
        <div className="hidden sm:flex sm:flex-col sm:w-80 border-r border-border bg-card">
          {/* Header */}
          <div className="border-b border-border p-4 sticky top-0 bg-card">
            <h1 className="text-lg font-semibold text-foreground mb-4">Messages</h1>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          {/* Conversations */}
          <div className="flex-1 overflow-y-auto">
            {filteredConversations.map((conv) => {
              const convDriver = drivers.find((d) => d.id === conv.driverId)!
              return (
                <button
                  key={conv.id}
                  onClick={() => setSelectedConversation(conv)}
                  className={cn(
                    'w-full border-b border-border p-4 text-left transition-colors hover:bg-muted/50',
                    selectedConversation.id === conv.id && 'bg-muted'
                  )}
                >
                  <div className="flex items-start gap-3">
                    <Avatar src={convDriver.avatar} alt={convDriver.name} size={40} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <p className="font-semibold text-foreground truncate">{convDriver.name}</p>
                        <span className="text-xs text-muted-foreground flex-shrink-0">{conv.timestamp}</span>
                      </div>
                      <p
                        className={cn(
                          'text-sm truncate',
                          conv.unread ? 'font-semibold text-foreground' : 'text-muted-foreground'
                        )}
                      >
                        {conv.lastMessage}
                      </p>
                    </div>
                    {conv.unread && (
                      <div className="size-2 rounded-full bg-primary flex-shrink-0 mt-1" />
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Chat View */}
        <div className="flex-1 flex flex-col">
          {driver && (
            <>
              {/* Chat Header */}
              <div className="border-b border-border bg-card p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar src={driver.avatar} alt={driver.name} size={40} />
                  <div>
                    <h2 className="font-semibold text-foreground">{driver.name}</h2>
                    <p className="text-xs text-muted-foreground">Online now</p>
                  </div>
                </div>
                <button className="rounded-lg hover:bg-muted p-2 text-muted-foreground">
                  <MoreVertical className="size-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {selectedConversation.messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      'flex gap-3',
                      message.sender === 'user' && 'flex-row-reverse'
                    )}
                  >
                    <Avatar
                      src={message.sender === 'driver' ? driver.avatar : '/images/avatar-1.png'}
                      alt="Avatar"
                      size={32}
                    />
                    <div
                      className={cn(
                        'flex flex-col gap-1 max-w-xs',
                        message.sender === 'user' && 'items-end'
                      )}
                    >
                      <div
                        className={cn(
                          'rounded-lg px-4 py-2.5',
                          message.sender === 'driver'
                            ? 'bg-muted text-foreground'
                            : 'bg-primary text-primary-foreground'
                        )}
                      >
                        <p className="text-sm">{message.text}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="border-t border-border bg-card p-4">
                <div className="flex gap-3">
                  <button className="rounded-lg hover:bg-muted p-2.5 text-muted-foreground transition-colors">
                    <Paperclip className="size-5" />
                  </button>
                  <input
                    type="text"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey && messageText.trim()) {
                        setMessageText('')
                      }
                    }}
                  />
                  <button className="rounded-lg bg-primary text-primary-foreground p-2.5 hover:opacity-90 transition-opacity">
                    <Send className="size-5" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  )
}
