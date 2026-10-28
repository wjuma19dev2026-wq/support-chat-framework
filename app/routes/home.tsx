import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <h3 className="text-3xl text-purple-500 font-bold">
        Bienvenido a React Router{" "}
      </h3>
    </>
  );
}
