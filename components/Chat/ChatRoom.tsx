'use client'

import axios from 'axios'
import { FormEvent, useEffect, useRef, useState } from 'react'

import ChatMessage from '@/components/Chat/ChatMessage'
import { getList } from '@/utils'
import { Message } from '@/types'

const ChatRoom = ({ chatId }: { chatId: string }) => {
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
