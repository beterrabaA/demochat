'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { FaFileDownload } from 'react-icons/fa'

import { mapperAndCsvConversor, getList } from '@/utils'
import { useAuthContext } from '@/context/AuthContext'
import { IChat } from '@/types'

const ChatHistoryCard = ({ data }: { data: IChat }) => {
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
