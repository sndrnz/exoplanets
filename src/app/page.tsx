import { redirect } from "next/navigation";

export default function Home() {
  redirect("/planets");
  return <div>Home</div>;
}
