import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Icon from '../components/Icon.jsx'
import Page, { stagger, fadeUp } from '../components/Page.jsx'
import { contacts } from '../data.js'

// تصویر سه‌بعدی کاغذی تلگرام با مدارهای نورانی
function PlaneArt() {
  return (
    <svg className="cta-art" viewBox="0 0 320 240" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="pa-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#3aa8ff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#3aa8ff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="pa-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#9bf8ff" />
          <stop offset="1" stopColor="#3a9bff" />
        </linearGradient>
        <linearGradient id="pa-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2f7bff" />
          <stop offset="1" stopColor="#2447d8" />
        </linearGradient>
        <linearGradient id="pa-c" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4a8dff" />
          <stop offset="1" stopColor="#6a4dff" />
        </linearGradient>
      </defs>

      <circle cx="160" cy="122" r="96" fill="url(#pa-glow)" />

      <ellipse cx="160" cy="122" rx="138" ry="60" transform="rotate(-18 160 122)" stroke="rgba(110,170,255,0.42)" strokeWidth="1.2" />
      <ellipse cx="160" cy="122" rx="104" ry="40" transform="rotate(22 160 122)" stroke="rgba(150,120,255,0.3)" strokeWidth="1.1" />

      <circle cx="40" cy="92" r="6.5" fill="#38ecdc" />
      <circle cx="262" cy="34" r="6" fill="#a46bff" />
      <circle cx="52" cy="198" r="5.5" fill="#38d9f0" />
      <circle cx="284" cy="170" r="2.6" fill="#8d9cff" />

      <g transform="translate(72 44) scale(0.88)">
        <path d="M18 96 L182 30 L74 118 Z" fill="url(#pa-a)" />
        <path d="M182 30 L74 118 L98 128 Z" fill="url(#pa-b)" />
        <path d="M182 30 L98 128 L148 166 Z" fill="url(#pa-c)" />
        <path d="M74 118 L98 128 L78 160 Z" fill="#1c3cb4" />
        <path d="M18 96 L182 30" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />
      </g>
    </svg>
  )
}

export default function Contact() {
  const telegram = contacts.find((c) => c.icon === 'telegram')

  return (
    <Page title="تماس با من">
      <motion.div variants={stagger} initial="hidden" animate="show">
        <motion.div className="contact-top" variants={fadeUp}>
          <span className="pill pill-soft pill-mail">
            <Icon name="mail" size={15} />
            تماس با من
          </span>
          <nav className="crumbs" aria-label="مسیر صفحه">
            <Link to="/" aria-label="خانه">
              <Icon name="home" size={19} />
            </Link>
            <Link to="/">خانه</Link>
            <Icon name="arrowLeft" size={14} />
            <span>تماس</span>
          </nav>
        </motion.div>

        <motion.h1 className="contact-title" variants={fadeUp}>
          یا با هم <span className="grad">چیزی بسازیم</span>
        </motion.h1>
        <motion.p className="contact-lead" variants={fadeUp}>
          ایده‌ای داری، سوالی هست، یا فقط می‌خواهی سلام کنی؟ از هر کدام از
          راه‌های زیر می‌توانی با من در ارتباط باشی. خوشحال می‌شوم پیام تو را
          دریافت کنم.
        </motion.p>

        <motion.div className="ccards" variants={stagger}>
          {contacts.map((c) => (
            <motion.a
              key={c.name}
              className={`ccard ${c.primary ? 'ccard-primary' : ''}`}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              variants={fadeUp}
              whileHover={{ y: -6 }}
            >
              <div className="ccard-top">
                <span className="ccard-icon" aria-hidden="true">
                  <Icon name={c.icon} size={24} />
                </span>
                <div className="ccard-meta">
                  <h4>{c.name}</h4>
                  <span dir="ltr">{c.handle}</span>
                </div>
              </div>
              <span className="ccard-go" aria-hidden="true">
                <Icon name="arrowRight" size={15} />
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.section className="cta-panel" variants={fadeUp}>
          <div className="cta-text">
            <h2>
              <Icon name="bolt" size={26} />
              معمولاً <span className="c-violet">سریع</span> جواب{' '}
              <span className="c-teal">می‌دهم</span>
            </h2>
            <p>اگر عجله داری، پیام در تلگرام سریع‌ترین راه رسیدن به من است.</p>
            <a
              className="btn btn-tg"
              href={telegram.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="arrowRight" size={18} />
              پیام در تلگرام
              <Icon name="telegram" size={19} />
            </a>
          </div>
          <PlaneArt />
        </motion.section>
      </motion.div>
    </Page>
  )
}
