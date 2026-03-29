// One event box — data comes from props (reusable)
function EventCard({ title, description, date, onRegister }) {
  return (
    <article
      className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-lg"
    >
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-indigo-600">{date}</p>
      <p className="mt-3 flex-1 text-gray-700 text-sm leading-relaxed">{description}</p>
      <button
        type="button"
        onClick={onRegister}
        className="mt-4 w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
      >
        Register
      </button>
    </article>
  )
}

export default EventCard
