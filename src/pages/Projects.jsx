import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Page, { stagger } from '../components/Page.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects, categories } from '../data.js'

export default function Projects() {
  const [cat, setCat] = useState('همه')
  const list = cat === 'همه' ? projects : projects.filter((p) => p.category === cat)

  return (
    <Page title="پروژه‌ها">
      <section className="block">
        <div className="block-head">
          <span className="pill pill-soft">گالری کارها</span>
          <h2>
            چیزهایی که <span className="grad">ساخته‌ام</span>
          </h2>
          <p className="desc">
            هر پروژه یک ایده‌ی واقعی است که زنده کار می‌کند — روی هر کاری بزن
            تا جزئیات کاملش را ببینی.
          </p>
        </div>

        <div className="chips">
          {categories.map((c) => (
            <button
              key={c}
              className={`chip ${cat === c ? 'chip-active' : ''}`}
              onClick={() => setCat(c)}
            >
              {c}
              <small>{c === 'همه' ? projects.length : projects.filter((p) => p.category === c).length}</small>
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid-3"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </Page>
  )
}
