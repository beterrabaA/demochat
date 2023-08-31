import { NextResponse, NextRequest } from 'next/server'

import prisma from '@/lib/prismadb'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { chatId } = body
    const messages = await prisma.message.findMany({
      where: {
        chatId,
      },
      orderBy: {
        createdAt: 'asc',
      },
    })
    return NextResponse.json(messages)
  } catch (error) {
    console.log(error, 'ERROR_MESSAGES')
    return new NextResponse('Error', { status: 500 })
  }
}
