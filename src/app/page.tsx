import Planet from "@/components/Planet";

export default function Home() {
  return (
    <main className="my-4">
      <h1 className="text-center font-bold text-3xl">Exoplaneten</h1>

      <div className="h-96 mt-4">
        <Planet />
      </div>
    </main>
  );
}
