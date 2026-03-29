import { useState } from 'react'

// Controlled form: all inputs use React state (useState)
function RegistrationForm({ events }) {
  const emptyForm = {
    name: '',
    email: '',
    eventId: '', // which event from dropdown
  }

  const [formData, setFormData] = useState(emptyForm)
  // After submit we show the values on screen (assignment also allows console)
  const [submitted, setSubmitted] = useState(null)

  // One handler for every field — uses input "name" attribute
  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const selectedEvent = events.find((x) => String(x.id) === String(formData.eventId))

    const payload = {
      name: formData.name,
      email: formData.email,
      eventTitle: selectedEvent ? selectedEvent.title : '(none chosen)',
    }

    console.log('Registration submitted:', payload)

    setSubmitted(payload)
    // optional: clear form after success
    // setFormData(emptyForm);
  }

  return (
    <section className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100">
      <h2 className="mb-4 text-xl font-semibold text-gray-900">Event registration</h2>
      <p className="mb-6 text-gray-600 text-sm">
        Fill the form below. All fields use one state object and one change handler.
      </p>

      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-800">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            placeholder="Your full name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-800">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label htmlFor="eventId" className="mb-1 block text-sm font-medium text-gray-800">
            Event selection
          </label>
          <select
            id="eventId"
            name="eventId"
            value={formData.eventId}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            required
          >
            <option value="">-- Choose an event --</option>
            {events.map((ev) => (
              <option key={ev.id} value={ev.id}>
                {ev.title} ({ev.date})
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 font-medium text-white transition hover:bg-indigo-700"
        >
          Submit registration
        </button>
      </form>

      {submitted && (
        <div className="mt-6 rounded-lg bg-indigo-50 p-4 text-sm text-indigo-900">
          <p className="font-semibold">Thank you — we received:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Name: {submitted.name}</li>
            <li>Email: {submitted.email}</li>
            <li>Event: {submitted.eventTitle}</li>
          </ul>
          <p className="mt-2 text-xs text-indigo-800">
            (Also check the browser console for the same object.)
          </p>
        </div>
      )}
    </section>
  )
}

export default RegistrationForm
