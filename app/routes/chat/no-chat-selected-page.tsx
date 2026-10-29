export const NoChatSelectedPage = () => {
  return (
    <div className="flex h-full flex-1 items-center justify-center bg-slate-50">
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-200 text-2xl">
          💬
        </div>

        <h2 className="text-xl font-semibold text-slate-900">
          No hay chat seleccionado
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Elige una conversación de la lista para comenzar a chatear.
        </p>
      </div>
    </div>
  )
}

export default NoChatSelectedPage
