import madhur from "../assets/madhur.png"

export default function About() {
  return (
    <section className="sticky top-20 md:block hidden self-start" style={{ maxWidth: "180px", marginTop: "75px" }}>
      <div className="mb-8 overflow-hidden rounded-full" style={{ background: "linear-gradient(45deg, #0037ff, #0088ff)" }}>
        <img 
          src={madhur} 
          width="180px" 
          height="180px" 
          alt="Headshot of Twan Mulder, Front-end Developer" 
          className="rounded-full"
        />
      </div>
      <p className="mb-1 text-sm tracking-wide text-gray-500 uppercase">About</p>
      <h2 className="mb-1 font-bold">Madhur Patil</h2>
      <p className="text-sm text-gray-500">An AIML Enthusiast who loves diving into AI & Analytics to create smarter, data-driven experiences</p>
    </section>
  )
}
