import { NavLink, Link } from 'react-router-dom'
import { navItems, profile, contacts } from '../data.js'
import Icon from './Icon.jsx'
import avatar from '../assets/avatar.jpg'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <Link to="/" className="side-brand">
        <span className="side-avatar">
          <img src={avatar} alt={profile.fullName} />
        </span>
        <span>
          <b>{profile.fullName}</b>
          <small>{profile.role}</small>
        </span>
      </Link>

      <nav className="side-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) => `side-link ${isActive ? 'active' : ''}`}
          >
            <span className="side-icon">
              <Icon name={item.icon} size={22} />
            </span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="side-social">
        {contacts.map((c) => (
          <a
            key={c.name}
            href={c.href}
            target={c.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            title={c.name}
          >
            <Icon name={c.icon} size={18} />
          </a>
        ))}
      </div>

      <div className="side-status">
        <span className="dot" />
        همیشه در حال یادگیری
      </div>
    </aside>
  )
}
