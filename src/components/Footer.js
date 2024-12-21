import { Link } from "react-router-dom"
import { GitHub, AtSign , Linkedin } from "react-feather"

export default function Footer() {
  return (
    <footer className="text-gray-700 bg-white" id="socials">
      <div className="container flex flex-col items-center px-5 py-8 mx-auto sm:flex-row">
        <Link to="/" className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start hover:text-blue-550">
          <span className="ml-3 text-xl font-bold">Madhur</span>
        </Link>
        <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:py-2 sm:mt-0">
          {new Date().getFullYear()} —
          <a className="ml-1 text-gray-600 transition-colors hover:text-blue-550" href="https://twitter.com/madhurboard" rel="noopener noreferrer" target="_blank">
            @madhurboard
          </a>
        </p>
        <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
          <a className="ml-3 text-gray-500 transition-colors hover:text-blue-550" href="https://github.com/madhurboard" rel="noopener noreferrer" target="_blank">
            <GitHub size={16} />
            <span className="sr-only">Go to GitHub profile</span>
          </a>
          <a className="ml-3 text-gray-500 transition-colors hover:text-blue-550" href="https://www.threads.net/@simply.madhur" rel="noopener noreferrer" target="_blank">
            <AtSign size={16} />
            <span className="sr-only">Go to Threads profile</span>
          </a>
          <a className="ml-3 text-gray-500 transition-colors hover:text-blue-550" href="https://www.linkedin.com/in/madhurpatil/" rel="noopener noreferrer" target="_blank">
            <Linkedin size={16} />
            <span className="sr-only">Go to LinkedIn profile</span>
          </a>
        </span>
      </div>
    </footer>
  )
}