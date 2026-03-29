import { useState } from 'react'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Events from './components/Events.jsx'
import RegistrationForm from './forms/RegistrationForm.jsx'
import Footer from './components/Footer.jsx'
import { eventsList } from './data/events.js'

function App() {
  // Which "page" we show — still one HTML page, we just swap sections
  const [activePage, setActivePage] = useState('home')

  function goRegister() {
    setActivePage('register')
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-indigo-50 to-white">
      <Header activePage={activePage} onNavigate={setActivePage} />

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
        {activePage === 'home' && (
          <section className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100 sm:p-8">
            <div className="flex flex-col items-stretch gap-8 md:flex-row md:items-center md:gap-10">
              <div className="flex-1 text-left">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome to EventHub</h2>
                <p className="mt-3 max-w-xl text-gray-700 leading-relaxed">
                  Browse events, read short descriptions, and register online. Use the menu above
                  to move around — this is a single page app, so it does not reload the whole
                  website.
                </p>
                <button
                  type="button"
                  onClick={() => setActivePage('events')}
                  className="mt-6 rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700"
                >
                  See events
                </button>
              </div>
              <div className="flex flex-1 justify-center md:justify-end">
                <img
                  src="/home-hero.svg"
                  alt="Calendar and events illustration"
                  className="h-auto w-full max-w-sm rounded-xl object-contain"
                />
              </div>
            </div>
          </section>
        )}

        {activePage === 'about' && <About />}

        {activePage === 'events' && (
          <Events events={eventsList} onGoRegister={goRegister} />
        )}

        {activePage === 'register' && <RegistrationForm events={eventsList} />}

        {activePage === 'contact' && (
          <section className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100">
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Contact</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              For questions about events, reach out using the details below. You can also go
              to <span className="font-medium">Register</span> to join an event from the list.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                Email:{' '}
                <a className="text-indigo-600 hover:underline" href="mailto:abubakrrasheed939@gmail.com">
                  abubakrrasheed939@gmail.com
                </a>
              </li>
              <li>Phone: 03039540035</li>
              <li className="flex flex-wrap gap-4 pt-1">
                <a
                  className="text-indigo-600 hover:underline"
                  href="https://www.linkedin.com/in/abubakar-rasheed-294489275"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="text-indigo-600 hover:underline"
                  href="https://github.com/AbubakarTechy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub (AbubakarTechy)
                </a>
              </li>
            </ul>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default App
