// آیکن‌ست سفارشی SVG — جایگزین ایموجی‌ها، با قابلیت رنگ‌پذیری

const paths = {
  home: (
    <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-9.5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  ),
  puzzle: (
    <>
      <path d="M9.5 3h5v3.2a1.8 1.8 0 1 0 3.6 0V3H21v5h-3.2a1.8 1.8 0 1 0 0 3.6H21V21h-5.2v-3.2a1.8 1.8 0 1 0-3.6 0V21H9.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9.5 3H3v18h6.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </>
  ),
  about: (
    <>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9.5 9.4a2.5 2.5 0 1 1 3.6 2.3c-.8.4-1.1 1-1.1 1.8v.5M12 17h.01" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="m3.5 7 7.4 5.4a2 2 0 0 0 2.2 0L20.5 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  github: (
    <path d="M12 2.3a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.7c-2.4.5-3.2-.6-3.5-1.3-.4-.9-.7-1.2-1.2-1.6-1-.4-1.2-1.2-.2-1.9.9-.4 1.7 0 2.4 1 .7 1 1.7 1.2 2.6.8.1-.5.4-1 .6-1.2-2.4-.3-4.3-1.6-4.3-4 0-1 .4-2 1-2.7-.2-.5-.4-1.5.1-2.7 0 0 1-.3 2.8 1a8.5 8.5 0 0 1 4 0c1.9-1.3 2.8-1 2.8-1 .5 1.2.3 2.2.1 2.7.7.7 1 1.6 1 2.7 0 2.4-1.9 3.7-4.3 4 .5.5.8 1.3.8 2v2.7c0 .3.2.7.7.5A9.8 9.8 0 0 0 12 2.3Z" fill="currentColor" />
  ),
  telegram: (
    <path d="M21.7 4.2 18.9 19c-.2 1-.9 1.2-1.7.8l-4.7-3.6-2.3 2.2c-.3.3-.5.5-1 .5l.4-5 8.7-7.9c.4-.3-.1-.5-.5-.2L6.9 12.4l-4.6-1.4c-1-.3-1-1 .2-1.5l17.7-6.8c.8-.3 1.7.2 1.5 1.5Z" fill="currentColor" />
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </>
  ),
  phone: (
    <path d="M6.6 3h2.1c.5 0 .9.3 1 .8l.9 3c.1.4 0 .9-.4 1.2l-1.4 1.1a12.5 12.5 0 0 0 5.1 5.1l1.1-1.4c.3-.4.8-.5 1.2-.4l3 .9c.5.1.8.5.8 1v2.1a2 2 0 0 1-2.2 2A16.8 16.8 0 0 1 4.6 5.2 2 2 0 0 1 6.6 3Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  ),
  code: (
    <path d="m8 8-4 4 4 4m8-8 4 4-4 4m-2.5-10-3 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  rocket: (
    <>
      <path d="M9 12.5c-1.5 0-4 .5-5-1.5 3-1 2.5-2.5 4-4 4-4 8.5-4.5 12-4.5 0 3.5-.5 8-4.5 12-1.5 1.5-3 1-4 4-2-1-1.5-3.5-1.5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="15" cy="8.5" r="1.3" fill="currentColor" />
      <path d="M6 15c-1 1-1.5 3.5-1.5 4.5 1 0 3.5-.5 4.5-1.5M5 19l1.5-1.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3a9 9 0 1 0 0 18c1.2 0 1.8-.9 1.6-1.9-.3-1.4.6-2.6 2-2.6h1.9A3.5 3.5 0 0 0 21 13c-.4-5.6-4.4-10-9-10Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="7.5" cy="11" r="1.2" fill="currentColor" />
      <circle cx="10" cy="7.5" r="1.2" fill="currentColor" />
      <circle cx="14.5" cy="7" r="1.2" fill="currentColor" />
    </>
  ),
  web: (
    <>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.8 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.8-3.8-9S9.5 5.5 12 3Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </>
  ),
  bolt: (
    <path d="M13 3 5.5 13H11l-1 8L18.5 11H13l1.5-8H13Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  ),
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 21h6m-3-4v4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="m4.5 11.2 7.5 4.2 7.5-4.2M4.5 15.2 12 19.4l7.5-4.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </>
  ),
  package: (
    <>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M4 7.5 12 12l8-4.5M12 12v9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </>
  ),
  play: (
    <path d="M8 6.5c0-.8.9-1.3 1.6-.9l8.5 5c.7.4.7 1.4 0 1.8l-8.5 5c-.7.4-1.6-.1-1.6-.9v-10Z" fill="currentColor" />
  ),
  arrowLeft: (
    <path d="M14 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  spark: (
    <path d="M12 3l1.8 5.7L19 10l-5.2 1.8L12 17.5l-1.8-5.7L5 10l5.2-1.3L12 3Zm7 9 .9 2.6L22 15l-2.1.9L19 18.5l-.9-2.6L16 15l2.1-.9L19 12Z" fill="currentColor" />
  ),
  box: (
    <>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M4 7.5 12 12l8-4.5M12 12v9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </>
  ),
  laptop: (
    <>
      <rect x="5" y="5" width="14" height="9.5" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 17.5h18l-1 2H4l-1-2Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </>
  ),
  wand: (
    <>
      <path d="M5 19 16.5 7.5M14 4l.9 2.1L17 7l-2.1.9L14 10l-.9-2.1L11 7l2.1-.9L14 4Zm6 6 .6 1.4 1.4.6-1.4.6L20 14l-.6-1.4L18 12l1.4-.6L20 10Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </>
  ),
  museum: (
    <>
      <path d="M4 21h16M5 18h14M6 9.5V18M10 9.5V18M14 9.5V18M18 9.5V18M3 9.5h18L12 3 3 9.5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </>
  ),
  film: (
    <>
      <rect x="3.5" y="4" width="17" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 4v16M16 4v16M3.5 9h4.5m8 0h4.5M3.5 15h4.5m8 0h4.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </>
  ),
  cart: (
    <>
      <path d="M3.5 4.5h2l2.6 10.3a1.4 1.4 0 0 0 1.4 1.1h7.9a1.4 1.4 0 0 0 1.4-1l1.7-6H6.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="19.3" r="1.4" fill="currentColor" />
      <circle cx="16.5" cy="19.3" r="1.4" fill="currentColor" />
    </>
  ),
  flower: (
    <>
      <circle cx="12" cy="12" r="2.4" fill="currentColor" />
      <path d="M12 9.6c-2-1.4-2-4.2 0-5.6 2 1.4 2 4.2 0 5.6Zm0 4.8c2 1.4 2 4.2 0 5.6-2-1.4-2-4.2 0-5.6Zm-2.4 0c-1.4 2-4.2 2-5.6 0 1.4-2 4.2-2 5.6 0Zm4.8 0c1.4-2 4.2-2 5.6 0-1.4 2-4.2 2-5.6 0Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </>
  ),
  heart: (
    <path d="M12 20.3 5.2 13.5a4.2 4.2 0 0 1 0-6 4.2 4.2 0 0 1 6 0l.8.8.8-.8a4.2 4.2 0 0 1 6 0 4.2 4.2 0 0 1 0 6L12 20.3Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  ),
  graduation: (
    <>
      <path d="m12 4 10 4.5L12 13 2 8.5 12 4Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M6.5 10.8v4.7c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-4.7M20.5 9.5V15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  grill: (
    <path d="M9 3h6M7.5 3.5c-2 2-2.5 4.7-2.5 6.5a7 7 0 0 0 14 0c0-1.8-.5-4.5-2.5-6.5M4 10l6.5 6.5L4 20M20 10l-6.5 6.5L20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  grill2: (
    <>
      <path d="M8 21h8M12 16.5V21M5 4.5C3.5 6 3 8 3 9.8a9 9 0 0 0 18 0C21 8 20.5 6 19 4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="10" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 3.5h.01M15.5 4.5v0M8.5 4.5v0" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8.2" r="3.7" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4.5 20.2c.6-3.7 3.5-5.7 7.5-5.7s6.9 2 7.5 5.7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  arrowRight: (
    <path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  external: (
    <path d="M14 4h6v6m0-6-9 9M18 14v4.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  wave: (
    <path d="M2 12c2.5-4 5.5-4 8 0s5.5 4 8 0 3-3.5 4-3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.8 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.8-3.8-9S9.5 5.5 12 3Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </>
  ),
}

export default function Icon({ name, size = 20, className = '', style = {} }) {
  const path = paths[name] || paths.spark
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`icon ${className}`}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      {path}
    </svg>
  )
}
