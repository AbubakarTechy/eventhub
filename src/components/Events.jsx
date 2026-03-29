import EventCard from './EventCard.jsx'

// Shows many EventCard components from an array
function Events({ events, onGoRegister }) {
  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold text-gray-900">Upcoming events</h2>
      <p className="mb-6 text-gray-600 text-sm">
        We have <span className="font-semibold text-indigo-700">{events.length}</span> events
        open right now.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((ev) => (
          <EventCard
            key={ev.id}
            title={ev.title}
            description={ev.description}
            date={ev.date}
            onRegister={onGoRegister}
          />
        ))}
      </div>
    </section>
  )
}

export default Events
