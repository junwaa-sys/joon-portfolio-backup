import React from 'react'
import img from '../imgs/todo.jpg'

export default function Todo() {
  return (
    <section id="projectsSection">
      <div className="workContainer">
        <img className="screenshot" src={img} alt="screen capture" />
        <div className="description">
          <h2>To-Do App</h2>
          <h3>Tech Used ..</h3>
          <div className="stackContainer">
            <div className="stackBox">
              <span
                className="iconify"
                data-icon="devicon:react"
                data-width="20"
              ></span>
              <h4>REACT</h4>
            </div>
            <div className="stackBox">
              <span
                className="iconify"
                data-icon="file-icons:redux"
                data-width="20"
              ></span>
              <h4>REDUX</h4>
            </div>
            <div className="stackBox">
              <span
                className="iconify"
                data-icon="devicon:knexjs"
                data-width="20"
              ></span>
              <h4>Knex</h4>
            </div>
            <div className="stackBox">
              <span
                className="iconify"
                data-icon="file-icons:typescript"
                data-width="20"
              ></span>
              <h4>TypeScripts</h4>
            </div>
          </div>
          <h3>Description</h3>
          <p>This was my first react full stack Application</p>
          <p>User can save to-do lists and mark them complete</p>
          <p>to easily track unfinished tasks.</p>
          <h3>Coming Next ..</h3>
          <p>Plan to implement user login so mutiple users can</p>
          <p>access their own to-do data.</p>
          <div className="workLinks">
            <a
              href="https://github.com/junwaa-sys/to-do"
              target="_blank"
              rel="noreferrer"
            >
              <span
                className="iconify"
                data-icon="radix-icons:github-logo"
                data-width="50"
              ></span>
            </a>
            <a
              href="https://to-do-production-9b30.up.railway.app/"
              target="_blank"
              rel="noreferrer"
            >
              <span
                className="iconify"
                data-icon="fluent-mdl2:website"
                data-width="50"
              ></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
