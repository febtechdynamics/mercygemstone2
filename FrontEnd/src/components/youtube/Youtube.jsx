import React from 'react'

const Youtube = () => {
  return (
    <>
        <section className="ring_section layout_padding">
    <div className="design-box">
      <img src="images/design-1.png" alt=""/>
    </div>
    <div className="container">
      <div className="ring_container layout_padding2">
        <div>
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/kYOP52BUZTI?si=xUqYfxVJppZ0ZX38" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
          </iframe>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Youtube