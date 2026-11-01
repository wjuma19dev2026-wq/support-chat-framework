import { Form, NavLink, useNavigation } from 'react-router'
import type { Route } from './+types/testing'
import { sleep } from '~/lib/sleep'
import { cn } from 'cn'

export async function action({ request }: Route.ActionArgs) {
  await sleep(2000)
  const data = await request.formData()
  console.log(data)
  return { ok: true, message: 'Usuario loggueado.' }
}
export async function loader() {
  console.log('Hello World! from serverLoader.')
  return { message: 'Hello, world!' }
}

export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
  const serverData = await serverLoader()
  console.log('Hello World! from clientLoader.')
  return { message: 'Hello, world from clientLoader!: ', serverData }
}

export async function clientAction({
  serverAction,
  request,
}: Route.ClientActionArgs) {
  const data = await serverAction()
  return { message: 'Client action from client', data }
}

export default function Testing({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  const navigation = useNavigation()

  const isLoading = navigation.state === 'submitting'
  console.log(isLoading)

  return (
    <div className="container mx-auto mt-5 w-full">
      <h1 className="text-2xl font-bold mb-3">Testin Page</h1>
      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>Action Data: {JSON.stringify(actionData)}</p>
      <p>Route Parameters: {JSON.stringify(params)}</p>
      <p className="mb-3">Matched Routes: {JSON.stringify(matches)}</p>

      <NavLink
        to="/testing-args/123"
        className={({ isPending }) =>
          `underline ${isPending ? 'text-red-500' : 'text-blue-500'}`
        }
      >
        {({ isPending }) => (
          <span className="inline-flex items-center gap-2">
            <span>{isPending ? 'Cargando...' : 'Ir a Testing Args Page'}</span>

            {isPending && (
              <span
                className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
                aria-label="Loading"
              />
            )}
          </span>
        )}
      </NavLink>

      <Form
        className="mt-8 max-w-lg space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60"
        method="POST"
      >
        <div className="space-y-2">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-slate-700"
          >
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Tu nombre de usuario"
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700"
          >
            Correo
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="tu@correo.com"
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={cn(
            'w-full rounded-lg bg-blue-600 px-4 py-2.5 font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/30 active:bg-blue-800',
            isLoading ? 'bg-blue-600/50 hover:bg-blue-600/50' : '',
          )}
        >
          {isLoading ? 'Por favor espere!.' : 'Enviar'}
        </button>
      </Form>
    </div>
  )
}
