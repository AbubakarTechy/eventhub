// Short info about what EventHub does
function About() {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100">
      <h2 className="mb-3 text-xl font-semibold text-gray-900">About EventHub</h2>
      <p className="mb-3 text-gray-700 leading-relaxed">
        EventHub is a simple website where you can see upcoming campus events in one place.
        You can read details like date and description, then sign up using the registration
        form.
      </p>
      <p className="text-gray-700 leading-relaxed">
        This project is built with <span className="font-medium text-indigo-700">React</span>{' '}
        so the page feels fast and smooth without full reloads when you move between sections.
      </p>
    </section>
  )
}

export default About
