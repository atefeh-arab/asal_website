import { useEffect } from 'react'
import { motion } from 'framer-motion'

// واریانت‌های مشترک برای ورود پلکانی عناصر
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

export const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Page({ title, children, wide = false }) {
  useEffect(() => {
    document.title = title ? `${title} | عسل` : 'عسل | توسعه‌دهنده وب'
  }, [title])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <motion.main
      className={`page ${wide ? 'page-wide' : ''}`}
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.38, ease: 'easeOut' }}
    >
      {children}
    </motion.main>
  )
}
