export default function Resume() {
  return (
    <section className="p-6 max-w-3xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Resume</h2>
      <a
        href="/resume.pdf"
        className="bg-green-600 text-white px-4 py-2 rounded"
        download
      >
        Download My Resume
      </a>
    </section>
  );
}
