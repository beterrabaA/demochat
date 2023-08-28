import { sendDataToStorage } from '@/firebase/firebase-auth'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { message, chatId } = body

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

    await fetch(API_URL as string, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        sendDataToStorage(data.choices[0].message.content, chatId, true)
      })

    return NextResponse.json({ message: 'success' })
  } catch (error) {
    console.error(error)
    return new NextResponse('Error', { status: 500 })
  }
}
