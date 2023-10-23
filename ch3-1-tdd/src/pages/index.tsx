import { useState } from 'react'
import { NewMessageForm } from '../components/NewMessageForm'
import { MessageList } from '@/components/MessageList'

export default function Home() {
  const [messages, setMessages] = useState<Array<string>>([])
  const handleSend = (newMessage: string) => {
    setMessages([newMessage, ...messages])
  }

  return (
    <>
      <NewMessageForm onSend={handleSend}/>
      <MessageList data={messages}/>
    </>
  ) 
}