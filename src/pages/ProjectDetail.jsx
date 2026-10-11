import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Icon from '../components/Icon.jsx'
import ProjectShot from '../components/ProjectShot.jsx'
import Page, { stagger, fadeUp } from '../components/Page.jsx'
import { projects } from '../data.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return <Navigate to="/projects" replace />

  const p = projects[index]
  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  return (
    <Page title={p.title} wide>
      <motion.div variants={stagger} initial="hidden" animate="show">
        <motion.div variants={fadeUp}>
          <Link to="/projects" className="back-link">
            <Icon name="arrowRight" size={15} />
            همه‌ی پروژه‌ها
          </Link>
        </motion.div>

        {p.live ? (
          <motion.a
            className="pd-shot"
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            title="مشاهده‌ی زنده"
            variants={fadeUp}
          >
            <ProjectShot project={p} className="shot-hero" eager />
          </motion.a>
        ) : (
          <motion.div className="pd-shot" variants={fadeUp}>
            <ProjectShot project={p} className="shot-hero" eager />
          </motion.div>
        )}

        <motion.div className="pd-head" variants={fadeUp}>
          <span className="pill pill-soft">{p.category}</span>
          <h1>{p.title}</h1>
          <p className="lead">{p.short}</p>
          <div className="pd-actions">
            {p.live && (
              <a
                className="btn btn-primary"
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                مشاهده زنده
                <Icon name="external" size={17} />
              </a>
            )}
            {p.repo && (
              <a
                className="btn btn-ghost"
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="github" size={17} />
                کد در گیت‌هاب
              </a>
            )}
          </div>
        </motion.div>

        <motion.div className="pd-grid" variants={fadeUp}>
          <div className="pd-panel">
            <h3>درباره پروژه</h3>
            <p>{p.description}</p>
            <div className="pcard-tags pd-tags">
              {p.tags.map((t) => (
                <i key={t}>{t}</i>
              ))}
            </div>
          </div>
          <div className="pd-panel">
            <h3>امکانات کلیدی</h3>
            <ul className="pd-features">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div className="pd-nav" variants={fadeUp}>
          <Link to={`/projects/${prev.slug}`} className="pd-neighbor">
            <small>پروژه قبلی</small>
            <b>{prev.title}</b>
          </Link>
          <Link to={`/projects/${next.slug}`} className="pd-neighbor next">
            <small>پروژه بعدی</small>
            <b>{next.title}</b>
          </Link>
        </motion.div>
      </motion.div>
    </Page>
  )
}
