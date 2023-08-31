import prisma from '@/lib/prismadb'
import { NextResponse, NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { chatId } = body

  const chat = await prisma.conversation.findUnique({
    where: {
      id: chatId,
    },
  })

  return NextResponse.json(chat)
}
