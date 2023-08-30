import bcrypt from 'bcrypt'

import prisma from '@/lib/prismadb'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const { username, password } = body

  const user = await prisma.user.findFirst({
    where: {
      username,
    },
  })

  if (!user) return new NextResponse('User not exists', { status: 400 })

  const normal = await bcrypt.compare(password, user?.hashedPwd)

  if (!normal) return new NextResponse('Wrong password', { status: 400 })

  return NextResponse.json(user)
}
