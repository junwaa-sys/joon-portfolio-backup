import React from 'react'
import styles from './styles/header.module.css'

export default function TopNav() {
  const navLinks = ['HOME', 'PROJECTS', 'ABOUT ME']
  const externalLinks = [
    {
      site: 'linkedIn',
      icon: 'fa fa-linkedin-square',
      link: 'https://www.linkedin.com/in/joon-young-jeong/',
    },
    {
      site: 'github',
      icon: 'fa fa-github',
      link: 'https://github.com/junwaa-sys',
    },
    { site: 'email', icon: 'fa fa-envelope', link: 'juny.jeong@gmail.com' },
  ]

  function renderNavLink(content) {
    const scrollToId = `${content.trim().replace(' ', '').toLowerCase()}Section`

    function handleClick() {
      document
        .getElementById(scrollToId)
        ?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
      <ul key={content}>
        <li>
          <button onClick={handleClick}>{content}</button>
        </li>
      </ul>
    )
  }

  function renderExternalLinks(exLinks) {
    return (
      <ul key={exLinks.site}>
        <li>
          {exLinks.site !== 'email' ? (
            <a href={exLinks.link} target="_blank" rel="noreferrer">
              <i className={exLinks.icon} style={{ fontSize: '1.5rem' }}></i>
            </a>
          ) : (
            <a href={`mailto:${exLinks.link}`}>
              <i className={exLinks.icon} style={{ fontSize: '1.5rem' }}></i>
            </a>
          )}
        </li>
      </ul>
    )
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navContainer}>
          <div>JOON JEONG</div>
          <nav>{navLinks.map((nav) => renderNavLink(nav))}</nav>
          <nav>{externalLinks.map((link) => renderExternalLinks(link))}</nav>
        </div>
      </div>
    </header>
  )
}
