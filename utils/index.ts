import axios from 'axios'

export async function getList(id: string) {
  const { data } = await axios.post('/api/messages/list', {
    chatId: id,
  })

  return data
}
