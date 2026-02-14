import React, { useState, useEffect } from "react";
import profile from "./assets/thiru.jpg";
 // ✅ your image here

export default function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const projects = [
    {
      id: 1,
      title: "Interview Prep AI",
      desc: "Web app that helps users practice interview questions with AI-driven scoring and feedback.",
      tech: ["React", "Node.js", "OpenAI"],
      link: "#"
    },
    {
      id: 2,
      title: "Portfolio Generator",
      desc: "Generate beautiful developer portfolios from structured input.",
      tech: ["React", "HTML/CSS", "AI"],
      link: "#"
    },
    {
      id: 3,
      title: "Calculator GUI (Java)",
      desc: "A responsive GUI calculator built with Java Swing (demo project).",
      tech: ["Java", "Swing"],
      link: "#"
    }
  ];

  useEffect(() => {
    document.documentElement.style.background = dark ? "#0b1020" : "#f3f4f6";
    document.documentElement.style.color = dark ? "#e6eef8" : "#0b1020";
  }, [dark]);

  useEffect(() => {
    const id = "portfolio-styles";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.innerHTML = `
      :root{ --accent: #7c3aed; --glass: rgba(255,255,255,0.06); }
      *{box-sizing:border-box}
      body,html,#root{height:100%}
      .container{max-width:1100px;margin:0 auto;padding:24px}
      header{display:flex;align-items:center;justify-content:space-between;padding:12px 0}
      .brand{font-weight:700;letter-spacing:0.4px}
      .nav{display:flex;gap:16px;align-items:center}
      .btn{background:var(--accent);border:none;color:white;padding:8px 12px;border-radius:10px;cursor:pointer}
      .ghost{background:transparent;border:1px solid rgba(255,255,255,0.06);padding:8px 12px;border-radius:8px}
      .hero{display:flex;gap:24px;align-items:center;padding:32px 0}
      .hero-left{flex:1}
      .hero-right{flex:1;display:flex;justify-content:center}
      .card{background:var(--glass);backdrop-filter:blur(6px);padding:18px;border-radius:14px;border:1px solid rgba(255,255,255,0.03)}
      .projects{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;margin-top:18px}
      .proj-tag{display:inline-block;padding:6px 8px;border-radius:999px;font-size:12px;margin-right:6px;border:1px solid rgba(255,255,255,0.06)}
      footer{padding:28px 0;text-align:center;color:rgba(255,255,255,0.7)}
      .skills{display:flex;flex-wrap:wrap;gap:8px}
      .contact-form{display:grid;gap:10px}
      input,textarea{padding:10px;border-radius:8px;border:1px solid rgba(255,255,255,0.06);background:transparent;color:inherit}

      @media (max-width:700px){
        .hero{flex-direction:column;text-align:center}
        header{align-items:flex-start}
      }

      html[data-theme='light']{
        --glass: rgba(12,18,28,0.03);
        --accent: #4f46e5;
        color: #0b1020
      }
      html[data-theme='light'] .card{border-color: rgba(0,0,0,0.06)}

      .fade-in{animation:fadeIn .6s ease both}
      @keyframes fadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
    `;
    document.head.appendChild(style);
    return () => { style.remove(); };
  }, []);

  useEffect(() => {
    if (dark) document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.setAttribute('data-theme', 'light');
  }, [dark]);

  return (
    <div>
      <div className="container">
        <header>
          <div className="brand">Barath Thirumal K</div>

          <nav className="nav">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <button className="ghost" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? 'Light' : 'Dark'}</button>
          </nav>
        </header>

        <main>
          <section className="hero">
            <div className="hero-left">
              <h2 style={{margin:'0 0 8px 0'}}>Hi — I'm <span style={{color:'var(--accent)'}}>Barath</span></h2>
              <h1 style={{margin:'0 0 18px 0'}}>Full Stack Developer · Java & React Enthusiast</h1>
              <p style={{margin:'0 0 18px 0',color:'rgba(255,255,255,0.8)'}}>I build practical tools and web apps focused on developer productivity and interview preparation.</p>
              <div style={{display:'flex',gap:10}}>
                <a className="btn" href="#projects">See Projects</a>
                <a className="ghost" href="#contact">Get in touch</a>
              </div>
            </div>

            <div className="hero-right">
              <div className="card" style={{width:300,textAlign:'center'}}>
                <img 
                  src={profile}
                  alt="avatar"
                  style={{width:120,height:120,display:'block',margin:'0 auto 12px',borderRadius:999}}
                />
                <div style={{fontWeight:700}}>Barath Thirumal K</div>
                <div style={{fontSize:13,color:'rgba(255,255,255,0.7)'}}>React • Java • AI</div>
              </div>
            </div>
          </section>

          <section id="projects" style={{marginTop:30}}>
            <h3>Projects</h3>
            <div className="projects">
              {projects.map(p => (
                <article key={p.id} className="card fade-in">
                  <h4 style={{margin:'0 0 6px 0'}}>{p.title}</h4>
                  <p style={{margin:'0 0 10px 0',color:'rgba(255,255,255,0.8)'}}>{p.desc}</p>
                  <div style={{marginBottom:10}}>
                    {p.tech.map(t => <span key={t} className="proj-tag">{t}</span>)}
                  </div>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <a className="ghost" href={p.link}>Live</a>
                    <a className="btn" href={p.link}>Code</a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="about" style={{marginTop:30}}>
            <h3>About</h3>
            <div className="card" style={{marginTop:12}}>
              <p style={{margin:0}}>I'm a developer who enjoys building tools that make engineering teams and learners more productive.</p>

              <h4 style={{marginTop:12}}>Skills</h4>
              <div className="skills">
                {['Java','React','HTML','CSS','Node.js','AI/ML'].map(s => (
                  <span key={s} className="proj-tag">{s}</span>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" style={{marginTop:30}}>
            <h3>Contact</h3>
            <div className="card" style={{marginTop:12}}>
              <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Thanks! (this is a demo form)'); }}>
                <input name="name" placeholder="Your name" required />
                <input name="email" type="email" placeholder="Email" required />
                <textarea name="message" placeholder="Message" rows={5} required />
                <div style={{display:'flex',gap:8}}>
                  <button className="btn" type="submit">Send</button>
                  <button className="ghost" type="button" onClick={() => { navigator.clipboard?.writeText('barath@example.com'); alert('Email copied!'); }}>Copy email</button>
                </div>
              </form>
            </div>
          </section>
        </main>

        <footer>
          <div style={{opacity:0.8}}>Made with ❤️ — built as a single-file React demo</div>
        </footer>

      </div>
    </div>
  );
}
