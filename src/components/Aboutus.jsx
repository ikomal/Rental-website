import React from 'react'
import About from '../subcomponents/About'
const Aboutus = () => {
  return (
    <section id="aboutPage" className='page'>
      <div className="container">
        <img src="/about.jpg" alt="about" />
        <div className="content">
          <h3 className="h3">Your peace of mind</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint adipisci consequatur iure ex aperiam ab.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ullam sequi at nam culpa laborum rem eum numquam voluptates fugit.</p>
        </div>
      </div>
      <About/>
    </section>
  )
}

export default Aboutus