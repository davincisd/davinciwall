
export default function Navbar() {
  return (
    <header className="flex items-center justify-between mb-10">
      <a href="#" className="text-xl font-bold tracking-tight">Davinci<span className="text-brand-400">Wall</span></a>
      <nav className="hidden md:flex gap-6 text-sm text-white/80">
        <a href="#about" className="hover:text-white">About</a>
        <a href="#projects" className="hover:text-white">Projects</a>
        <a href="#contact" className="hover:text-white">Contact</a>
      </nav>
      <a href="#contact" className="btn md:inline-flex">Let’s work</a>
    </header>
  )
}
