export interface IChat {
  id: string
  userName: string
  isFinished: boolean
  createdAt: string
  updatedAt: string
}

export interface Message {
  body: string
  isBot: boolean
}

export interface IMessageChatProps {
  chatId: string
}

export interface IChatHistory {
  id: string
  body: string
  chatId: string
  isBot: boolean
  createdAt: string
}
