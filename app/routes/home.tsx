import type { Route } from './+types/home'
import { Welcome } from '../welcome/welcome'
import ClientChatPage from './chat/client-chat-page'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export default function Home() {
  return (
    <>
      <p>
        Bienvenido a <span>Support Chat</span>
      </p>
    </>
  )
}
