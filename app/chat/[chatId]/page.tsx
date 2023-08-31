'use client'

import ChatRoom from '@/components/Chat/ChatRoom'
import SignIn from '@/components/SignIn'
import SignOut from '@/components/SignOut'

import { useAuthContext } from '@/context/AuthContext'

import { IMessageChatProps } from '@/types'

const HomePage = ({ params }: { params: IMessageChatProps }) => {
  const { isLogged } = useAuthContext()
  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>
        {isLogged ? <ChatRoom chatId={params.chatId} /> : <SignIn />}
      </section>
    </div>
  )
}

export default HomePage
