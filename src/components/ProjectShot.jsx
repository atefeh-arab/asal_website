import { useState } from 'react'
import Icon from './Icon.jsx'

// عکس دستی برای پروژه: فایلی با نام <slug> در src/assets/covers (png / jpg / webp)
// مثلاً src/assets/covers/kiddo-money.webp
const covers = import.meta.glob('../assets/covers/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
})

function coverOf(slug) {
  for (const [path, url] of Object.entries(covers)) {
    const name = path.split('/').pop().replace(/\.[^.]+$/, '')
    if (name === slug) return url
  }
  return null
}

// منبع‌های عکس پروژه — به ترتیب اولویت:
// ۰) عکس دستی (بالا)
// ۱) عکس ذخیره‌شده در public/screenshots/<slug>.jpg (با `npm run screenshots` ساخته می‌شود)
// ۲) سرویس اسکرین‌شات آنلاین (خودکار از آدرس زنده‌ی پروژه)
// ۳) پشتیبان: گرادیان + آیکن
export function shotSources(project) {
  const cover = coverOf(project.slug)
  const local = `${import.meta.env.BASE_URL}screenshots/${project.slug}.jpg`
  return [
    ...(cover ? [cover] : []),
    local,
    ...(/^https?:/.test(project.live || '')
      ? [
          `https://image.thum.io/get/width/1280/crop/800/noanalytics/${project.live}`,
          `https://s0.wp.com/mshots/v1/${encodeURIComponent(project.live)}?w=1280&h=800`,
        ]
      : []),
  ]
}

function hostOf(url) {
  try {
    return new URL(url, window.location.href).host
  } catch {
    return ''
  }
}

export default function ProjectShot({ project, className = '', eager = false }) {
  const sources = shotSources(project)
  const [i, setI] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [contain, setContain] = useState(false)
  const failed = i >= sources.length

  return (
    <div className={`shot ${className}`} style={{ '--shot-grad': project.gradient }}>
      <div className="shot-bar" aria-hidden="true">
        <i />
        <i />
        <i />
        <span dir="ltr">{hostOf(project.live)}</span>
      </div>
      <div className={`shot-view ${contain ? 'is-contain' : ''}`}>
        {!failed && (
          <img
            key={i}
            src={sources[i]}
            alt={`صفحه‌ی اول ${project.title}`}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            className={loaded ? 'is-loaded' : ''}
            onLoad={(e) => {
              setContain(e.currentTarget.naturalWidth / e.currentTarget.naturalHeight < 1.3)
              setLoaded(true)
            }}
            onError={() => {
              setLoaded(false)
              setI((n) => n + 1)
            }}
          />
        )}
        {(!loaded || failed) && (
          <div className="shot-fallback">
            <Icon name={project.icon} size={56} />
          </div>
        )}
      </div>
    </div>
  )
}
