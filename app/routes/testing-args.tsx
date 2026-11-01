import { NavLink } from "react-router";

import { sleep } from "~/lib/sleep";
import type { Route } from "./+types/testing";

export async function loader() {
  console.log("Hello World! from serverLoader.");
  return { message: "Hello, world!" };
}

export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
  await sleep(2000);
  const serverData = await serverLoader();
  console.log("Hello World! from clientLoader.");
  return { message: "Hello, world from clientLoader!", serverData };
}

export function HydrateFallback() {
  return (
    <div className="flex min-h-[200px] items-center justify-center">
      <div className="flex items-center gap-3 text-slate-600">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-300 border-t-blue-500" />
        <span className="text-lg font-medium">Cargando...</span>
      </div>
    </div>
  );
}

clientLoader.hydrate = true as const;

export default function TestingArgs({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  return (
    <div className="container mx-auto mt-5 w-full">
      <h1 className="text-2xl font-bold mb-3">Testin Args Page</h1>
      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>Action Data: {JSON.stringify(actionData)}</p>
      <p>Route Parameters: {JSON.stringify(params)}</p>
      <p className="mb-3">Matched Routes: {JSON.stringify(matches)}</p>

      <NavLink to="/testing" className="text-blue-500 underline">
        Ir a Testing Page
      </NavLink>
    </div>
  );
}
