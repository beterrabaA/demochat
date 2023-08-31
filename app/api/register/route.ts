import bcrypt from 'bcrypt'

import prisma from '@/lib/prismadb'
import { NextResponse, NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { name, username, password, chatId } = body

  const hashedPwd = await bcrypt.hash(password, 12)

  const user = await prisma.user.findFirst({
    where: {
      username,
    },
  })

  if (user) return new NextResponse('Username already in use', { status: 400 })

  const newUser = await prisma.user.create({
    data: {
      name,
      username,
      hashedPwd,
    },
  })

  await prisma.conversation.update({
    where: {
      id: chatId,
    },
    data: {
      userName: newUser.name,
    },
  })

  return NextResponse.json(newUser)
}
