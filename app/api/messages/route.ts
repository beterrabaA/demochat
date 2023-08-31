import prisma from '@/lib/prismadb'

import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { message, chatId } = body

    await prisma.message.create({
      data: {
        body: message,
        chatId,
      },
    })

    const API_URL = process.env.NEXT_PUBLIC_OPEN_AI_API_URL
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPEN_AI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
      }),
    }
    // data.choices[0].message.content, chatId, true
    const response = await fetch(API_URL as string, requestOptions)
    const data = await response.json()
    const botMessage = data.choices[0].message.content

    await prisma.message.create({
      data: {
        body: botMessage,
        chatId,
        isBot: true,
      },
    })

    return NextResponse.json({ body: botMessage, isBot: true })
  } catch (error) {
    console.error(error)
    return new NextResponse('Error', { status: 500 })
  }
}
