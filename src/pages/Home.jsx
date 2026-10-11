import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Icon from '../components/Icon.jsx'
import Page, { stagger, fadeUp } from '../components/Page.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { profile, projects, skills } from '../data.js'

export default function Home() {
  const featured = projects.slice(0, 3)

  return (
    <Page title="خانه">
      <section className="hero">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.h1 variants={fadeUp}>
            {profile.tagline.split(' ').slice(0, 3).join(' ')}{' '}
            <span className="grad">
              {profile.tagline.split(' ').slice(3).join(' ')}
            </span>
          </motion.h1>
          <motion.p className="lead" variants={fadeUp}>
            {profile.role} — علاقه‌مند به دنیای کامپیوتر و تکنولوژی. اینجا
            فضایی برای معرفی مهارت‌ها، پروژه‌ها و چیزهایی است که در این مسیر
            می‌سازم.
          </motion.p>
          <motion.div className="hero-btns" variants={fadeUp}>
            <Link to="/projects" className="btn btn-primary">
              <Icon name="arrowRight" size={18} />
              پروژه‌های من
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              <Icon name="mail" size={17} />
              تماس با من
            </Link>
          </motion.div>
          <motion.div className="hero-stats" variants={fadeUp}>
            {profile.stats.map((s) => (
              <div key={s.label} className="stat">
                <span className="stat-icon">
                  <Icon name={s.icon} size={24} />
                </span>
                <b>{s.value}</b>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="block">
        <div className="block-head">
          <motion.span className="pill pill-soft" variants={fadeUp}>
            منتخب
          </motion.span>
          <h2>
            چند نمونه از <span className="grad">پروژه‌های زنده</span>
          </h2>
        </div>
        <motion.div
          className="grid-3"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </motion.div>
        <motion.div className="center" variants={fadeUp}>
          <Link to="/projects" className="btn btn-ghost">
            دیدن همه‌ی ۷ پروژه
          </Link>
        </motion.div>
      </section>

      <section className="marquee" aria-hidden="true">
        <div className="marquee-lane">
          {[...skills, ...skills].map((s, i) => (
            <span key={i} className="marquee-item">
              <Icon name={s.icon} size={15} />
              {s.name}
            </span>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <h2>
          بیا با هم <span className="grad">چیزی بسازیم</span>
        </h2>
        <p>ایده‌ای داری، سوالی هست، یا فقط می‌خواهی سلام کنی؟</p>
        <Link to="/contact" className="btn btn-primary">
          <Icon name="heart" size={16} />
          از اینجا بگو سلام
        </Link>
      </section>
    </Page>
  )
}
