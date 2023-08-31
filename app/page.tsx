'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { useAuthContext } from '@/context/AuthContext'
import ChatHistoryCard from '@/components/Chat/ChatHistoryCard'
import { IChat } from '@/types'

const HomePage = () => {
  const { setChatId } = useAuthContext()
  const [conversationList, setConversationList] = useState([] as IChat[])
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const pushToChat = async () => {
    const { data } = await axios.post('/api/chat/new')
    setChatId(data.id)
    router.push(`/chat/${data.id}`)
  }
  return (
    <div>
      <div className="mt-20 justify-between lg:flex lg:flex-col">
        {isLoading && <p>Loading...</p>}
        {conversationList.map((item) => (
          <ChatHistoryCard key={item.id} data={item} />
        ))}
      </div>
      <button
        className="fixed bottom-0 bg-black rounded-3xl font-semibold mb-4"
        type="button"
        onClick={() => pushToChat()}
      >
        New Chat
      </button>
    </div>
  )
}

export default HomePage
