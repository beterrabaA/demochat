import Image from 'next/image'

import ChatCard from '@/components/Chat/ChatCard'

import { Message } from '@/types'

const ChatMessage = ({ body, isBot }: Message) => {
  const showLoanMessage = body?.toLowerCase().includes('loan') && isBot
  const userPerfilUrl =
    'https://www.pngall.com/wp-content/uploads/5/User-Profile-Transparent.png'
  const botPerfilUrl =
    'https://e7.pngegg.com/pngimages/710/450/png-clipart-computer-icons-internet-bot-axialis-iconworkshop-chatbot-end-miscellaneous-purple-thumbnail.png'
  return (
    <>
      <div className={`message ${!isBot ? 'sent' : 'received'}`}>
        <Image
          src={isBot ? botPerfilUrl : userPerfilUrl}
          alt="perfil"
          width={15}
          height={15}
        />
        <p>{body}</p>
      </div>
      {showLoanMessage && <ChatCard />}
    </>
  )
}

export default ChatMessage
