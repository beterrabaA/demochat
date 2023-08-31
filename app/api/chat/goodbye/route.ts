import prisma from '@/lib/prismadb'
import { NextResponse, NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { chatId } = body

  const finishChat = await prisma.conversation.update({
    where: {
      id: chatId,
    },
    data: {
      isFinished: true,
    },
  })

  return NextResponse.json(finishChat)
}
