import type { Conversation } from './types'
import { drivers } from './placeholder-data'

export const conversations: Conversation[] = [
  {
    id: 'c1',
    participant: drivers[1],
    lastMessage: 'See you at Oriente station at 08:15!',
    lastMessageTime: '10 min ago',
    unreadCount: 2,
    messages: [
      {
        id: 'm1',
        senderId: 'tomas-r',
        receiverId: 'me',
        content: 'Hi! I booked 2 seats on your Lisbon → Porto ride.',
        timestamp: '2024-06-14T07:30:00',
        read: true,
      },
      {
        id: 'm2',
        senderId: 'me',
        receiverId: 'tomas-r',
        content: 'Great! Looking forward to it. I'll be at Oriente station.',
        timestamp: '2024-06-14T07:45:00',
        read: true,
      },
      {
        id: 'm3',
        senderId: 'tomas-r',
        receiverId: 'me',
        content: 'Can I bring a medium-sized suitcase?',
        timestamp: '2024-06-14T07:50:00',
        read: true,
      },
      {
        id: 'm4',
        senderId: 'me',
        receiverId: 'tomas-r',
        content: 'Of course, no problem!',
        timestamp: '2024-06-14T07:55:00',
        read: true,
      },
      {
        id: 'm5',
        senderId: 'tomas-r',
        receiverId: 'me',
        content: 'See you at Oriente station at 08:15!',
        timestamp: '2024-06-14T08:00:00',
        read: false,
      },
    ],
  },
  {
    id: 'c2',
    participant: drivers[2],
    lastMessage: 'Thanks for the smooth ride!',
    lastMessageTime: '2 hours ago',
    unreadCount: 0,
    messages: [
      {
        id: 'm6',
        senderId: 'lucas-f',
        receiverId: 'me',
        content: 'Thanks for the smooth ride!',
        timestamp: '2024-06-13T15:00:00',
        read: true,
      },
    ],
  },
  {
    id: 'c3',
    participant: drivers[3],
    lastMessage: 'Is there a stop in Coimbra?',
    lastMessageTime: '1 day ago',
    unreadCount: 1,
    messages: [
      {
        id: 'm7',
        senderId: 'ana-c',
        receiverId: 'me',
        content: 'Is there a stop in Coimbra?',
        timestamp: '2024-06-13T10:00:00',
        read: false,
      },
    ],
  },
]
