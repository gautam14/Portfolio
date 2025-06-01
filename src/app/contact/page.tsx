export default function Contact() {
  return (
    <section className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="border p-2 rounded" />
        <input type="email" placeholder="Your Email" className="border p-2 rounded" />
        <textarea placeholder="Your Message" className="border p-2 rounded"></textarea>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
      </form>
    </section>
  );
}
