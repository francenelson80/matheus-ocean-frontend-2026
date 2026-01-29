import type { Route } from "./+types/home";
import { Personagens } from "../welcome/personagens";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rick and Morty" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Personagens />;
}
