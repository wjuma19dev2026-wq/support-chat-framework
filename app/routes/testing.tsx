import type { Route } from '../+types/testing'

export async function loader() {
  console.log('Hello World! from serverLoader.')
  return { message: 'Hello, world!' }
}

export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
  const serverData = await serverLoader()
  console.log('Hello World! from clientLoader.')
  return { message: 'Hello, world from clientLoader!: ', serverData }
}

export default function MyRouteComponent({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  return (
    <div className="container mx-auto mt-5 w-full">
      <h1>Welcome to My Route with Props!</h1>
      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>Action Data: {JSON.stringify(actionData)}</p>
      <p>Route Parameters: {JSON.stringify(params)}</p>
      <p>Matched Routes: {JSON.stringify(matches)}</p>
    </div>
  )
}
