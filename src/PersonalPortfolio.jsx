import React, { useState } from 'react';

// Personal Portfolio - Single file React component (TailwindCSS)
// Instructions:
// 1. Put your CV PDF at public/assets/AbdullahAbuzaid_CV.pdf (this repo already references that filename)
// 2. Put the two example hero/profile images at public/images/example.jpg and public/images/example2.jpg
// 3. This component uses TailwindCSS and Google Font 'Montserrat'. Add Tailwind to your project or adapt styles.
// 4. Replace any placeholder text/images directly in this file.

export default function PersonalPortfolio() {
  const [route, setRoute] = useState('home');

  const nav = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];

  const openRoute = (r) => setRoute(r);

  return (
    <div className="min-h-screen font-montserrat bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-sm bg-black/40 border-b border-white/6">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/6 flex items-center justify-center text-xl font-bold">A</div>
            <div>
              <div className="text-sm opacity-80">Abdullah Abu Zaid</div>
              <div className="text-xs opacity-60">PhD Candidate · Researcher</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => openRoute(n.id)}
                className={`text-sm uppercase tracking-wide hover:opacity-100 opacity-80 ${route === n.id ? 'text-white' : ''}`}
              >
                {n.label}
              </button>
            ))}
            <a
              href="assets/AbdullahAbuzaid_CV.pdf"
              download
              className="ml-4 inline-block px-4 py-2 border border-white/10 rounded text-sm hover:bg-white/5"
            >
              Download CV
            </a>
          </nav>

          <div className="md:hidden">
            <select
              className="bg-black/10 text-sm rounded p-2"
              value={route}
              onChange={(e) => setRoute(e.target.value)}
            >
              {nav.map((n) => (
                <option key={n.id} value={n.id}>{n.label}</option>
              ))}
            </select>
          </div>
        </div>
      </header>

      {/* Main content container */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {route === 'home' && <Hero onExplore={() => openRoute('about')} />}
        {route === 'about' && <About />}
        {route === 'resume' && <Resume />}
        {route === 'portfolio' && <PortfolioGallery />}
        {route === 'contact' && <Contact />}
      </main>

      <footer className="border-t border-white/6 mt-16 py-6">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm opacity-70">
          © {new Date().getFullYear()} Abdullah Abu Zaid — Built with care · Black & White theme
        </div>
      </footer>
    </div>
  );
}

/* ---------- Subcomponents (Hero, About, Resume, PortfolioGallery, Contact) ---------- */

function Hero({ onExplore }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className="order-2 md:order-1">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Hi, I’m <span className="text-white">Abdullah Abu Zaid</span>
        </h1>
        <p className="mt-4 text-gray-300 max-w-xl leading-relaxed">
          PhD Candidate (Electrical & Computer Engineering) at KAUST. Researcher in aerial-aided communications, urban
          air mobility, and performance analysis of wireless networks. Machine Learning & High Performance Computing
          enthusiast.
        </p>

        <div className="mt-6 flex items-center gap-3">
          <a href="assets/AbdullahAbuzaid_CV.pdf" download className="px-4 py-2 border border-white/10 rounded text-sm">
            Download CV
          </a>
          <button onClick={onExplore} className="px-4 py-2 bg-white/6 rounded text-sm hover:bg-white/10">
            About me
          </button>
        </div>

        <div className="mt-8 flex gap-4 items-center text-gray-400">
          <ContactPill label="Email" value="abdullah.it.abuzaid@gmail.com"/>
          <ContactPill label="LinkedIn" value="linkedin.com/in/AAbuzaid"/>
          <ContactPill label="GitHub" value="github.com/AAbuzaid"/>
        </div>
      </div>

      <div className="order-1 md:order-2 flex justify-center">
        <div className="w-72 h-72 rounded-lg overflow-hidden ring-1 ring-white/6">
          {/* Replace with hero/profile image */}
          <img src="images/Abdullah-photo.jpg" alt="Hero" className="w-full h-full object-cover grayscale"/>
        </div>
      </div>
    </section>
  );
}

function ContactPill({ label, value }) {
  return (
    <div className="text-xs">
      <div className="text-gray-400 text-[11px]">{label}</div>
      <div className="text-sm text-white truncate max-w-[180px]">{value}</div>
    </div>
  );
}

function About() {
  return (
    <section className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-1 flex justify-center md:justify-start">
        <div className="w-64 h-80 rounded-lg overflow-hidden ring-1 ring-white/6">
          <img src="images/example2.jpg" alt="Profile" className="w-full h-full object-cover grayscale"/>
        </div>
      </div>

      <div className="md:col-span-2">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-gray-300 leading-relaxed">
          I am a Research Assistant at the Communication Theory Lab, King Abdullah University of Science and Technology
          (KAUST), supervised by Prof. Mohamed-Slim Alouini. My research focuses on aerial-aided communications for
          urban air mobility and performance analysis of wireless networks using stochastic geometry and machine
          learning. I hold an MS in Computer Science (Machine Learning) from Georgia Tech and an MS in Electrical and
          Computer Engineering from KAUST.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm text-gray-400 uppercase tracking-wide">Contact</h3>
            <p className="mt-2 text-sm">Email: abdullah.it.abuzaid@gmail.com</p>
            <p className="text-sm">Phone: +966 5599 37286</p>
            <p className="text-sm">Location: KAUST, Thuwal, Saudi Arabia</p>
          </div>

          <div>
            <h3 className="text-sm text-gray-400 uppercase tracking-wide">Languages</h3>
            <ul className="mt-2 text-sm space-y-1">
              <li>Arabic — Native</li>
              <li>English — Professional proficiency (IELTS 8.0)</li>
              <li>French — Basic (A1)</li>
              <li>German — Basic (A1)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Resume</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <ResumeBlock title="Education">
            <ResumeItem title="PhD in Electrical and Computer Engineering" date="04/2022 – Present" place="KAUST, Thuwal" />
            <ResumeItem title="MS in Computer Science (Machine Learning)" date="08/2020 – 12/2024" place="Georgia Institute of Technology (Remote)" />
            <ResumeItem title="MS in Electrical and Computer Engineering" date="08/2020 – 04/2022" place="KAUST" />
            <ResumeItem title="BSc in Electrical Engineering" date="10/2015 – 06/2020" place="University of Jordan — Ranked 1st/81" />
          </ResumeBlock>

          <ResumeBlock title="Experience">
            <ResumeItem title="Research Assistant — Communication Theory Lab" date="08/2020 – Present" place="KAUST" description={`Studying performance of aerial-aided communications for vehicles and advanced air mobility using stochastic geometry.`} />
            <ResumeItem title="Teaching Assistant" date="01/2022 – 05/2022" place="KAUST" description={`TA in Numerical Optimization course.`} />
            <ResumeItem title="IAESTE Research Internship" date="06/2019 – 07/2019" place="University of Lleida, Spain" description={`Implemented cryptosystems with Python and SageMath.`} />
          </ResumeBlock>

          <ResumeBlock title="Publications & Awards">
            <ul className="list-disc ml-5 space-y-2 text-sm text-gray-300">
              <li>Extended Road-Aware Line-of-Sight Probability Model for Urban Air Mobility — IEEE Transactions, 2025. (Best paper award — Global AAM, ICAO 2024)</li>
              <li>Aerial-Terrestrial Heterogeneous Networks for Urban Air Mobility — IEEE Open Journal of Vehicular Technology, 2025.</li>
              <li>eVTOL Communications and Networking in UAM — IEEE Communications Magazine, 2023.</li>
              <li>Aerial-aided mmWave VANETs using NOMA — IEEE Transactions on Vehicular Technology, 2023.</li>
            </ul>
          </ResumeBlock>
        </div>

        <aside className="md:col-span-1">
          <div className="bg-black/30 p-6 rounded-lg">
            <h3 className="text-sm text-gray-400 uppercase">Technical Skills</h3>
            <div className="mt-4 space-y-3">
              {['C++','Python','MATLAB','Linux','Git','AWS','Docker','Kubernetes'].map((s) => (
                <SkillBar key={s} skill={s} value={Math.floor(70 + Math.random()*25)} />
              ))}
            </div>

            <div className="mt-6">
              <h3 className="text-sm text-gray-400 uppercase">Courses & Certifications</h3>
              <ul className="mt-3 text-sm space-y-2 text-gray-300">
                <li>AWS Certified Solutions Architect - Associate</li>
                <li>Graduate ML, CV, Deep Learning (Georgia Tech)</li>
                <li>High Performance Computing, Robotics, Algorithms</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-8">
        <a href="assets/AbdullahAbuzaid_CV.pdf" download className="px-4 py-2 border border-white/10 rounded text-sm">Download full CV (PDF)</a>
      </div>
    </section>
  );
}

function ResumeBlock({ title, children }) {
  return (
    <div>
      <h3 className="text-lg font-medium mb-3">{title}</h3>
      <div className="text-sm text-gray-300">{children}</div>
    </div>
  );
}

function ResumeItem({ title, date, place, description }) {
  return (
    <div className="mb-4">
      <div className="flex items-baseline justify-between">
        <strong className="text-white">{title}</strong>
        <div className="text-xs text-gray-400">{date}</div>
      </div>
      <div className="text-xs text-gray-400">{place}</div>
      {description && <p className="mt-2 text-sm text-gray-300">{description}</p>}
    </div>
  );
}

function SkillBar({ skill, value = 80 }) {
  return (
    <div>
      <div className="flex justify-between text-xs text-gray-400">
        <div>{skill}</div>
        <div>{value}%</div>
      </div>
      <div className="w-full bg-white/5 h-2 rounded mt-1">
        <div className="h-2 rounded" style={{ width: `${value}%`, background: 'linear-gradient(90deg, rgba(255,255,255,0.9), rgba(255,255,255,0.6))' }} />
      </div>
    </div>
  );
}

function PortfolioGallery() {
  // Placeholder tiles — replace with project cards and images
  const projects = [
    { title: 'Aerial Communications Modeling', subtitle: 'IEEE paper & simulations', img: 'images/example.jpg' },
    { title: 'Performance Analysis with ML', subtitle: 'Dataset + models', img: 'images/example2.jpg' },
    { title: 'eVTOL Networks Study', subtitle: 'Simulation & analysis', img: 'images/example.jpg' },
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Portfolio</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article key={p.title} className="rounded-lg overflow-hidden ring-1 ring-white/6 bg-black/20">
            <img src={p.img} alt={p.title} className="w-full h-40 object-cover grayscale"/>
            <div className="p-4">
              <h4 className="font-semibold">{p.title}</h4>
              <p className="text-sm text-gray-300 mt-2">{p.subtitle}</p>
              <div className="mt-4">
                <a className="text-xs border px-3 py-2 rounded" href="#">View</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="max-w-2xl">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <p className="text-gray-300 mb-6">I am available for research collaborations, review invitations, and speaking engagements. You can
        reach me at:</p>

      <div className="space-y-3">
        <div className="text-sm">Email: <strong className="text-white">abdullah.it.abuzaid@gmail.com</strong></div>
        <div className="text-sm">LinkedIn: <a href="https://linkedin.com/in/AAbuzaid" className="underline">linkedin.com/in/AAbuzaid</a></div>
        <div className="text-sm">GitHub: <a href="https://github.com/AAbuzaid" className="underline">github.com/AAbuzaid</a></div>
      </div>

      <form className="mt-6 space-y-3">
        <input className="w-full bg-black/20 p-3 rounded border border-white/6" placeholder="Your name" />
        <input className="w-full bg-black/20 p-3 rounded border border-white/6" placeholder="Your email" />
        <textarea className="w-full bg-black/20 p-3 rounded border border-white/6" rows={5} placeholder="Message" />
        <div>
          <button className="px-4 py-2 bg-white/6 rounded">Send message</button>
        </div>
      </form>
    </section>
  );
}

/* ---------- Additional instructions for integration (not part of component) ----------

1) Tailwind & Fonts
   - Install Tailwind in your React project, or convert classes to your preferred CSS.
   - Add Google Font in your index.html: <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;800&display=swap" rel="stylesheet">
   - In your CSS: .font-montserrat { font-family: 'Montserrat', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }

2) Static assets
   - Place the CV file at public/assets/AbdullahAbuzaid_CV.pdf
   - Place images into public/images/example.jpg and public/images/example2.jpg (these are used as hero/profile images)

3) Customization
   - Replace text blocks and publications/awards with any additional items from your CV. Sections are intentionally short and professional to match the provided designs.

4) Accessibility & SEO
   - Add meta tags and alt text for images when deploying.

*/


