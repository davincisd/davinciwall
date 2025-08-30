
export default function ProjectCard({ title, desc, tags = [], link = "#" }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="card hover:scale-[1.01] transition block">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-white/70 mt-1">{desc}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10">{t}</span>
            ))}
          </div>
        </div>
        <span className="text-sm text-brand-300">↗</span>
      </div>
    </a>
  )
}
