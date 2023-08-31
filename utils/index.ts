import axios from 'axios'
import { convertArrayToCSV } from 'convert-array-to-csv'

import { IChatHistory } from '@/types'

export async function getList(id: string) {
  const { data } = await axios.post('/api/messages/list', {
    chatId: id,
  })

  return data
}

export function mapperAndCsvConversor(data: IChatHistory[]) {
  const mappedData = data.map((item: IChatHistory) => ({
    message: item.body,
    createdAt: item.createdAt,
  }))

  const csvFromArrayOfObjects = convertArrayToCSV(mappedData)

  return csvFromArrayOfObjects
}
