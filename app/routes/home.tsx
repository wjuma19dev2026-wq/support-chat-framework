import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export default function Home() {
  return (
    <>
      <h1 className="text-5xl font-light">Bienvenidos a React Router!</h1>
      <p className="text-2xl">
        Proyecto de React Router Framework creado con Vite
      </p>
    </>
  )
}
