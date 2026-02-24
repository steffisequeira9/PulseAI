import Link from "next/link";

export default function BreathingPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-black text-white text-center gap-6">
      <h1 className="text-3xl text-red-500">Check Breathing</h1>

      <p>Look at the chest.</p>
      <p>Not breathing or only gasping?</p>

      <Link href="/emergency/cpr">
        <button className="bg-red-600 px-6 py-3 rounded-xl text-lg">
          Start CPR
        </button>
      </Link>
    </main>
  );
}
