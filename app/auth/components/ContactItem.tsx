import { cn } from 'cn'
import { NavLink } from 'react-router'
import type { Client } from '~/routes/chat/interfaces/chat-interfaces'

interface Props {
  client: Client
}

const getButtonStyles = (isActive: boolean) => {
  return cn(
    'w-full justify-start hover:cursor-pointer group/button inline-flex shrink-0 items-center justify-start rounded-md border text-xs font-semibold tracking-widest whitespace-nowrap uppercase transition-all duration-200 ease-out outline-none select-none',
    'bg-secondary text-secondary-foreground hover:bg-secondary/90',
    'border-transparent',
    'focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30',
    'active:translate-y-px',
    isActive && [
      'bg-sky-50 text-sky-700 shadow-[0_1px_2px_rgba(14,116,144,0.08)]',
      'border-sky-200/80 ring-1 ring-sky-200/60',
      'dark:bg-sky-950/30 dark:text-sky-300 dark:border-sky-800/70 dark:ring-sky-800/60',
    ],
  )
}

export const ContactItem = ({ client }: Props) => {
  return (
    <NavLink
      to={`/chat/client/${client.id}`}
      className={({ isActive }) =>
        cn(
          'px-3', // padding horizontal al inicio
          getButtonStyles(isActive),
        )
      }
    >
      <div
        className={cn(
          'm-2 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs text-white transition-colors duration-200',
          'bg-sky-500',
        )}
      >
        {client.name.charAt(0)}
        {client.name.split(' ')[1]?.charAt(0) ?? ''}
      </div>
      {client.name}
    </NavLink>
  )
}
