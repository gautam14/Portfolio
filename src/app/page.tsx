import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Hi, I’m [Your Name]</h1>
      <p className="mb-6">A Web Developer crafting modern, responsive web experiences.</p>
      <Link href="/projects" className="bg-blue-600 text-white px-4 py-2 rounded">See My Work</Link>
    </main>
  );
}
