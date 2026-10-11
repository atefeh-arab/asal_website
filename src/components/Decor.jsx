import Icon from './Icon.jsx'

// عناصر تزئینی پس‌زمینه (حباب‌های نورانی، مدار و نقطه‌ها) مثل طرح مرجع
export default function Decor() {
  return (
    <div className="decor" aria-hidden="true">
      <span className="decor-blob decor-blob-top" />
      <span className="decor-blob decor-blob-bottom" />
      <span className="decor-blob decor-blob-bottom-2" />

      <svg className="decor-orbits" viewBox="0 0 520 760" fill="none">
        <ellipse cx="170" cy="240" rx="360" ry="150" transform="rotate(-16 170 240)" stroke="rgba(110,140,255,0.22)" strokeWidth="1.2" />
        <ellipse cx="120" cy="430" rx="250" ry="120" transform="rotate(14 120 430)" stroke="rgba(110,140,255,0.18)" strokeWidth="1.2" />
        <circle cx="258" cy="90" r="4" fill="#5a6cff" />
        <circle cx="198" cy="234" r="4.5" fill="#38ecdc" />
        <circle cx="131" cy="397" r="4.5" fill="#8b6cff" />
        <circle cx="195" cy="508" r="4.5" fill="#38ecdc" />
      </svg>

      <span className="decor-code">
        <Icon name="code" size={46} />
      </span>
      <span className="decor-dots" />
    </div>
  )
}
