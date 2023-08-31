'use client'

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from 'react'

interface ContextProps {
  isLogged: boolean
  setIsLogged: Dispatch<SetStateAction<boolean>>
  isLogin: boolean
  setIsLogin: Dispatch<SetStateAction<boolean>>
  name: string
  setName: Dispatch<SetStateAction<string>>
  chatId: string
  setChatId: Dispatch<SetStateAction<string>>
}

const UserContext = createContext<ContextProps>({
  isLogged: false,
  setIsLogged: (): boolean => false,
  isLogin: true,
  setIsLogin: (): boolean => false,
  name: '',
  setName: (): string => '',
  chatId: '',
  setChatId: (): string => '',
})

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLogged, setIsLogged] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [name, setName] = useState('')
  const [chatId, setChatId] = useState('')

  return (
    <UserContext.Provider
      value={{
        isLogged,
        setIsLogged,
        isLogin,
        setIsLogin,
        name,
        setName,
        chatId,
        setChatId,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useAuthContext = () => useContext(UserContext)
