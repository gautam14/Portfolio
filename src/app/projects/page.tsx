export default function Projects() {
  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="border p-4 rounded shadow">
          <h3 className="font-semibold text-lg">Project Title</h3>
          <p className="mb-2">Brief description of the project.</p>
          <a href="https://github.com/username/project" className="text-blue-600">GitHub Link</a>
        </div>
      </div>
    </section>
  );
}
