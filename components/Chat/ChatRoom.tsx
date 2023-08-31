'use client'

import axios from 'axios'
import { FormEvent, useEffect, useRef, useState } from 'react'

import ChatMessage from '@/components/Chat/ChatMessage'
import { getList } from '@/utils'
import { Message } from '@/types'

const ChatRoom = ({ chatId }: { chatId: string }) => {
  const dummy = useRef<HTMLInputElement | null>(null)
  const [formValue, setFormValue] = useState('')
  const [botMessage, setBotMessage] = useState({} as Message)
  const [localMessages, setLocalMessages] = useState([] as Message[])
  const [isFinished, setIsFinished] = useState(false)

  const setInitialList = async () => {
    const startList = await getList(chatId)
    const { data } = await axios.post('/api/chat', { chatId })
    setLocalMessages(startList)
    setIsFinished(data.isFinished)
  }

  const sendMessage = async (event: FormEvent) => {
    event.preventDefault()

    try {
      if (formValue.toLowerCase().includes('goodbye')) {
        axios.post('/api/chat/goodbye', { chatId })
        setIsFinished(true)
      }
      setLocalMessages([...localMessages, { body: formValue, isBot: false }])
      setFormValue('')
      const { data } = await axios.post('/api/messages', {
        message: formValue,
        chatId,
      })
      setBotMessage(data)
    } catch (error) {
      console.log('error', error)
    }
    dummy.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    setInitialList()
  }, [])
  return (
    <>
      <main>
        {localMessages &&
          localMessages.map((msg, i) => (
            <ChatMessage key={i + msg.body} body={msg.body} isBot={msg.isBot} />
          ))}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage} className="form-message">
        {!isFinished ? (
          <>
            <input
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              disabled={isFinished}
              placeholder="say something nice"
            />

            <button type="submit" disabled={!formValue}>
              🕊️
            </button>
          </>
        ) : (
          <div className="w-full bg-gray-150 p-0 items-center flex justify-center">
            <p className="text-white pt-5">Chat is finished</p>
          </div>
        )}
      </form>
    </>
  )
}

export default ChatRoom
