import React from 'react'
export default function Home() {
  function handleDownLoad() {
    const fileName = 'cv.pdf'
    const fileUrl = `${process.env.PUBLIC_URL}/files/${fileName}`

    const link = document.createElement('a')
    link.download = fileName
    link.href = fileUrl
    link.click()
  }
  return (
    <section id="homeSection">
      <h1>Joon Young Jeong</h1>
      <h2>Full Stack Software Developer</h2>
      <button onClick={handleDownLoad}>DOWNLOAD CV</button>
      <div className="stackContainer">
        <div className="stackBox">
          <span
            className="iconify"
            data-icon="devicon:react"
            data-width="50"
          ></span>
          <h2>REACT</h2>
        </div>
        <div className="stackBox">
          <span
            className="iconify"
            data-icon="file-icons:redux"
            data-width="50"
          ></span>
          <h2>REDUX</h2>
        </div>
        <div className="stackBox">
          <span className="iconify" data-icon="la:node" data-width="50"></span>
          <h2>NODE.JS</h2>
        </div>
        <div className="stackBox">
          <span
            className="iconify"
            data-icon="teenyicons:javascript-outline"
            data-width="50"
          ></span>
          <h2>JavaScripts</h2>
        </div>
        <div className="stackBox">
          <span
            className="iconify"
            data-icon="file-icons:typescript"
            data-width="50"
          ></span>
          <h2>TypeScripts</h2>
        </div>
        <div className="stackBox">
          <span
            className="iconify"
            data-icon="typcn:html5"
            data-width="50"
          ></span>
          <h2>HTML5</h2>
        </div>
        <div className="stackBox">
          <span
            className="iconify"
            data-icon="devicon:knexjs"
            data-width="50"
          ></span>
          <h2>Knex</h2>
        </div>
        <div className="stackBox">
          <span
            className="iconify"
            data-icon="devicon-plain:sqlite-wordmark"
            data-width="50"
          ></span>
          <h2>Sqlite3</h2>
        </div>
        <div className="stackBox">
          <span
            className="iconify"
            data-icon="material-symbols:database"
            data-width="50"
          ></span>
          <h2>SQL Database</h2>
        </div>
      </div>
    </section>
  )
}
