// Footer: contact info + LinkedIn & GitHub
function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <p className="text-center text-sm font-medium text-gray-800">Contact</p>
        <p className="mt-1 text-center text-sm text-gray-600">
          Email:{' '}
          <a className="text-indigo-600 hover:underline" href="mailto:abubakrrasheed939@gmail.com">
            abubakrrasheed939@gmail.com
          </a>
          {' · '}
          Phone: 03039540035
        </p>
        <div className="mt-4 flex justify-center gap-6 text-sm">
          <a
            href="https://www.linkedin.com/in/abubakar-rasheed-294489275"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/AbubakarTechy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            GitHub
          </a>
        </div>
        <p className="mt-6 text-center text-xs text-gray-500">
          © {year} EventHub — AWP Assignment 1
        </p>
      </div>
    </footer>
  )
}

export default Footer
