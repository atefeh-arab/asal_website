import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProjectShot from './ProjectShot.jsx'
import { fadeUp } from './Page.jsx'

export default function ProjectCard({ project }) {
  return (
    <motion.div variants={fadeUp} className="card-slot">
      <Link to={`/projects/${project.slug}`} className="pcard">
        <div className="pcard-cover">
          <ProjectShot project={project} />
          {!project.hideCategory && <span className="pcard-cat">{project.category}</span>}
        </div>
        <div className="pcard-body">
          <h3>{project.title}</h3>
          <p>{project.short}</p>
          <div className="pcard-foot">
            <div className="pcard-tags">
              {project.tags.slice(0, 2).map((t) => (
                <i key={t}>{t}</i>
              ))}
            </div>
            <span className="pcard-more">جزئیات</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
