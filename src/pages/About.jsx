import { motion } from 'framer-motion'
import Icon from '../components/Icon.jsx'
import Page, { stagger, fadeUp } from '../components/Page.jsx'
import { profile, skills } from '../data.js'

export default function About() {
  return (
    <Page title="درباره من">
      <motion.div variants={stagger} initial="hidden" animate="show">
        <div className="block-head">
          <motion.span className="pill pill-soft" variants={fadeUp}>
            درباره من
          </motion.span>
          <motion.h2 variants={fadeUp}>
            کمی بیشتر <span className="grad">با من آشنا شو</span>
          </motion.h2>
        </div>

        <div className="about-cols">
          <div>
            {profile.bio.map((t, i) => (
              <motion.p key={i} className="about-p" variants={fadeUp}>
                {t}
              </motion.p>
            ))}
          </div>
          <motion.div className="facts" variants={fadeUp}>
            {profile.facts.map((f) => (
              <div key={f.label} className="fact">
                <span className="fact-icon">
                  <Icon name={f.icon} size={21} />
                </span>
                <span>{f.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="block-head block-head-gap">
          <motion.h2 variants={fadeUp}>
            جعبه‌ابزار <span className="grad">من</span>
          </motion.h2>
        </div>
        <motion.div className="grid-4" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          {skills.map((s) => (
            <motion.div key={s.name} className="skill" variants={fadeUp} whileHover={{ y: -6 }}>
              <span className="skill-icon">
                <Icon name={s.icon} size={22} />
              </span>
              <div>
                <h4>{s.name}</h4>
                <span>{s.level}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="block-head block-head-gap">
          <motion.h2 variants={fadeUp}>
            <span className="grad">مسیر</span> من
          </motion.h2>
        </div>
        <motion.div className="grid-4" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          {profile.journey.map((j) => (
            <motion.div key={j.step} className="journey" variants={fadeUp} whileHover={{ y: -6 }}>
              <span className="journey-step">{j.step}</span>
              <h4>{j.title}</h4>
              <p>{j.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Page>
  )
}
