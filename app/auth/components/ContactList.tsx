import { LogOut } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { ScrollArea } from '~/components/ui/scroll-area'
import { ContactItem } from './ContactItem'
import type { Client } from '~/routes/chat/interfaces/chat-interfaces'

interface Props {
  clients: Client[]
}

export const ContactList = ({ clients }: Props) => {
  return (
    <ScrollArea className="h-[calc(100vh-64px)]">
      <div className="space-y-4 p-4">
        <div className="space-y-1">
          <h3 className="px-2 text-sm font-semibold">Contacts</h3>
          <div className="space-y-1">
            {clients.map(client => (
              <ContactItem
                key={client.id}
                client={client}
              />
            ))}
          </div>
        </div>
        <div className="pt-4 border-t mt-4">
          <h3 className="px-2 text-sm font-semibold mb-1">Recent</h3>
          <Button
            variant="ghost"
            className="w-full justify-start"
          >
            <div className="h-6 w-6 rounded-full bg-gray-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
              TM
            </div>
            Thomas Miller
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start"
          >
            <div className="h-6 w-6 rounded-full bg-red-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
              SB
            </div>
            Sarah Brown
          </Button>
        </div>
        <div className="pt-4 mt-4 grid">
          <Button
            variant="outline"
            className="cursor-pointer"
          >
            <LogOut className="h-4 w-4 mr-2" /> Cerrar Session
          </Button>
        </div>
      </div>
    </ScrollArea>
  )
}
