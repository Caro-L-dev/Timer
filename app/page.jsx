import Timer from "./components/Timer";

export default function Home() {
  return (
    <main className="min-h-full flex flex-col justify-center items-center">
      <h1 className="uppercase text-3xl font-extrabold">timer</h1>
      <Timer />
    </main>
  );
}
