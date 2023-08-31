'use client'

import { useAuthContext } from '@/context/AuthContext'

import Login from '@/components//Login'
import Register from '@/components/Register'

const SignIn = () => {
  const { isLogin } = useAuthContext()
  return <>{!isLogin ? <Login /> : <Register />}</>
}

export default SignIn
