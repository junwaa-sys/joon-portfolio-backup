import React from 'react'
import img from '../imgs/pfo.jpg'

export default function PFO() {
  return (
    <section id="projectsSection">
      <h1>PROJECTS</h1>
      <div className="workContainer">
        <img className="screenshot" src={img} alt="screen capture" />
        <div className="description">
          <h2>Personal Finance Organizer</h2>
          <h4>Status: On Developement</h4>
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
                data-icon="simple-icons:auth0"
                data-width="20"
              ></span>
              <h4>Auth0</h4>
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
          <h3>Idea</h3>
          <p>Like a business accounting programme, I thought it would be </p>
          <p>
            useful if there is a personal finance organizer. It can record bank
          </p>
          <p>transactions, categorise them and compare them with set budget.</p>
          <h3>Coming Next ..</h3>
          <p>
            This project has not been completed yet. I will continue to work on.
          </p>
          <p>Next task will be adding monthly and annual budget.</p>
          <h3>Difficulties</h3>
          <p>One of the most difficult parts was to handle format of date.</p>
          <p>
            Date picker and getDate() function uses different timezone. Also
            different bank
          </p>
          <p>
            uses different date format for their CSV transaction file. Had to
            check if
          </p>
          <p>the Date format is consistant with one in database.</p>
          <h3>Live Website is not available. </h3>
          <p>
            Please refer github for code and miro link for wireframe and
            planning.
          </p>
          <div className="workLinks">
            <a
              href="https://github.com/junwaa-sys/Joon-Project"
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
              href="https://miro.com/app/board/uXjVMalhU4g=/?share_link_id=652478842729"
              target="_blank"
              rel="noreferrer"
            >
              <span
                className="iconify"
                data-icon="arcticons:miro"
                data-width="50"
              ></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
