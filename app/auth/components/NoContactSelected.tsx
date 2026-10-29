import { UserRound } from 'lucide-react'

export const NoContactSelected = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center p-6 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-200 text-slate-500 dark:bg-slate-700 dark:text-slate-400">
        <UserRound className="h-8 w-8" />
      </div>

      <h3 className="text-sm font-semibold">No hay contacto seleccionado</h3>

      <p className="mt-2 text-sm text-muted-foreground">
        Selecciona un contacto de la lista para ver su información.
      </p>
    </div>
  )
}
