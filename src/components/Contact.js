import { Linkedin } from "react-feather"

export default function Contact() {
  return (
    <section className="mt-16 container" id="contact">
      <article style={{ background: "linear-gradient(45deg, #0037ff, #0088ff)" }} className="flex flex-col justify-between p-8 mx-auto text-white shadow-2xl md:items-center md:p-12 rounded-3xl bg-blue-550 md:flex-row">
        <div className="max-w-lg">
          <p className="mb-8 text-5xl font-bold">
            Let's Connect and Collaborate!
          </p>
          <p>
            As an AI and Machine Learning enthusiast, I'm always excited to explore new ideas, share knowledge, and collaborate on projects that push the boundaries of technology. I’m not looking for a role, but I’d love to connect with others who share the same passion for AI, data science, and the endless possibilities they offer.
          </p>

          <p className="mt-2">Interested or want to get to know me a bit better?</p>
        </div>
        <div className="mt-8 md:mt-0">
          <a href="https://www.linkedin.com/in/madhurpatil/" className="inline-flex items-center justify-center w-full px-6 py-3 mb-4 text-xl font-bold text-center text-black transition bg-white rounded-lg md:justify-start md:w-auto hover:opacity-90 transform-gpu hover:-translate-y-1" target="_blank" rel="noreferrer noopener">
            <Linkedin size={20} />
            <span className="ml-2">Get in Touch</span>
          </a>
          <p>
            Prefer email?
            <br />
            You can reach out to me
            <br />
            at{' '}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=madhurpatil73@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'white', textDecoration: 'underline' }}
            >
              madhurpatil73@gmail.com
            </a>
          </p>
        </div>
      </article>
    </section>
  )
}
