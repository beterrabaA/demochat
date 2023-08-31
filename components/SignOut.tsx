'use client'

import { useAuthContext } from '@/context/AuthContext'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const SignOut = () => {
  const { isLogged, setIsLogged, chatId } = useAuthContext()
  const router = useRouter()

  const pushToOrigin = async () => {
    axios.post('/api/chat/goodbye', { chatId })
    await router.push(`/`)
    setIsLogged(false)
  }
  return (
    isLogged && (
      <button className="sign-out" onClick={() => pushToOrigin()}>
        Sign Out
      </button>
    )
  )
}

export default SignOut
