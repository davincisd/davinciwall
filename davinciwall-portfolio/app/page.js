
"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section className="text-center py-10 md:py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Creative <span className="text-brand-400">AI</span> & Developer
        </motion.h1>
        <p className="text-white/70 mt-4 max-w-2xl mx-auto">
          I blend code, design, and storytelling to craft experiences that feel human. Welcome to my wall of ideas.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="#projects" className="btn">View Projects</a>
          <a href="#contact" className="btn bg-white/10 hover:bg-white/20">Contact</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-10 md:py-16">
        <h2 className="section-title">About</h2>
        <p className="mt-4 text-white/80 leading-relaxed">
          Hey, I’m Davinci — a computer science specialist focused on AI. I build intelligent apps, sleek UIs,
          and cinematic digital content. I love solving real problems with a playful mindset.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="py-10 md:py-16">
        <h2 className="section-title">Projects</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <ProjectCard
            title="FocusMate AI"
            desc="Android productivity assistant with scheduling, app blocking, and Drive integration."
            tags={["Android", "Kotlin", "AI"]}
            link="#"
          />
          <ProjectCard
            title="Apple Stock Predictor"
            desc="ML models (LR, RF, LSTM) forecasting AAPL closing prices with tech indicators."
            tags={["Python", "ML", "Time Series"]}
            link="#"
          />
          <ProjectCard
            title="FitFood"
            desc="Nutrition & rewards-based meal planning with a clean UI/UX."
            tags={["React", "Firebase"]}
            link="#"
          />
          <ProjectCard
            title="TalentLink"
            desc="Campus job portal—clean architecture and scalable backend."
            tags={["Node", "Postgres", "Cloud"]}
            link="#"
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-10 md:py-16">
        <h2 className="section-title">Contact</h2>
        <p className="mt-4 text-white/80">Want to collaborate? Send me a message.</p>
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="card mt-6 grid gap-4"
        >
          <input name="name" placeholder="Your name" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10" required />
          <input type="email" name="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10" required />
          <textarea name="message" rows="5" placeholder="Tell me about your idea..." className="px-4 py-3 rounded-xl bg-white/5 border border-white/10" required />
          <button className="btn w-fit">Send</button>
        </form>
      </section>

      <footer className="py-10 text-sm text-white/50">
        © {new Date().getFullYear()} DavinciWall. Built with Next.js.
      </footer>
    </div>
  );
}
