'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { FaFileDownload } from 'react-icons/fa'

import { mapperAndCsvConversor, getList } from '@/utils'
import { useAuthContext } from '@/context/AuthContext'
import { IChat } from '@/types'

const ChatHistoryCard = ({ data }: { data: IChat }) => {
  const { setChatId, setIsLogged } = useAuthContext()
  const [isDownloading, setIsDownloading] = useState(false)
  const router = useRouter()

  const formmaterDate = () => {
    const datado = new Date(data.updatedAt)
    return `${datado.getDate()}/${
      datado.getMonth() + 1
    }/${datado.getFullYear()} ${datado.getHours()}:${datado.getMinutes()}`
  }

  const pushToChat = async () => {
    setChatId(data.id)
    setIsLogged(true)
    router.push(`/chat/${data.id}`)
  }

  const handleDownlonad = async () => {
    setIsDownloading(true)
    const list = await getList(data.id)
    const newCsv = mapperAndCsvConversor(list)
    const url = window.URL.createObjectURL(new Blob([newCsv]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute(
      'download',
      `Conversation ${data.userName} - ${formmaterDate()}.csv`,
    )
    document.body.appendChild(link)
    link.click()
    setIsDownloading(false)
  }

  const ChatDownloadFooter = () => (
    <button
      className="flex bg-black rounded-3xl font-semibold justify-center items-center max-w-xs mt-1"
      type="button"
      onClick={() => handleDownlonad()}
    >
      <FaFileDownload />
      {isDownloading ? 'Downloading...' : 'Download'}
    </button>
  )
  return (
    <div className="flex lg:flex-row lg:justify-between flex-col border-black lg:mb-2 items-center">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white pt-4 pl-4">
        {`${data.userName} - ${formmaterDate()}`}
      </h1>
      {data.isFinished ? (
        <ChatDownloadFooter />
      ) : (
        <button type="button" onClick={() => pushToChat()}>
          Continue
        </button>
      )}
    </div>
  )
}

export default ChatHistoryCard
