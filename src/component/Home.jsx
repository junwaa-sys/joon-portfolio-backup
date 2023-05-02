import React from 'react'
export default function Home() {
  function handleDownLoad() {
    const fileName = 'cv.pdf'
    const fileUrl = `${process.env.PUBLIC_URL}/files/${fileName}`

    const link = document.createElement('a')
    link.download = fileName
    link.href = fileUrl
    link.click()
    // fetch('../files/JOON-YOUNG-JEONG.pdf')
    //   .then((res) => {
    //     res
    //       .blob()
    //       .then((blob) => {
    //         const fileURL = window.URL.createObjectURL(blob)
    //         const alink = document.createElement('a')
    //         alink.href = fileURL
    //         alink.download = 'Joon-CV.pdf'
    //         alink.click()
    //       })
    //       .catch((error) => {
    //         console.log(error)
    //       })
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  }
  return (
    <section id="homeSection">
      <h1>Joon Young Jeong</h1>
      <h2>Full Stack Software Developer</h2>
      <p>Hi I am Joon!</p>
      <button onClick={handleDownLoad}>DOWNLOAD CV</button>
    </section>
  )
}
