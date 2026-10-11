import { NavLink } from 'react-router-dom'
import { navItems } from '../data.js'
import Icon from './Icon.jsx'

export default function MobileNav() {
  return (
    <nav className="tabbar">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === '/'}
          className={({ isActive }) => `tab ${isActive ? 'active' : ''}`}
        >
          <span className="tab-icon">
            <Icon name={item.icon} size={20} />
          </span>
          <span className="tab-label">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
