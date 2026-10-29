import { MessageSquare } from 'lucide-react'

export const NoChatSelectedPage = () => {
  return (
    <div className="flex h-full flex-1 flex-col items-center justify-center p-6 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-200 text-slate-500 dark:bg-slate-700 dark:text-slate-400">
        <MessageSquare className="h-8 w-8" />
      </div>

      <h3 className="text-sm font-semibold">No hay chat seleccionado</h3>

      <p className="mt-2 text-sm text-muted-foreground">
        Elige una conversación de la lista para comenzar a chatear.
      </p>
    </div>
  )
}

export default NoChatSelectedPage
