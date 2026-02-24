import Link from "next/link";

export default function EmergencyPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-black text-white text-center gap-6">
      <h1 className="text-4xl font-bold text-red-500">
        🚨 Emergency Mode
      </h1>

      <p className="text-lg">
        Stay Calm. Check the area and the patient.
      </p>

      <Link href="/emergency/breathing">
        <button className="bg-red-600 px-8 py-4 rounded-xl text-xl">
          START
        </button>
      </Link>
    </main>
  );
}