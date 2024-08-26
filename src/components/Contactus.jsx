import React from 'react'
import { Link } from 'react-router-dom'
import { RiFacebookBoxLine } from 'react-icons/ri'

const Contactus = () => {
  return (
    <section id="contact">
      <h1 className='h1'>CONTACT US</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt quam explicabo eos commodi reprehenderit ab doloribus sunt expedita delectus, possimus exercitationem, voluptatem quod dignissimos laboriosam repellat odio, maiores libero optio.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum sunt inventore ipsum soluta consectetur numquam vel dolorem nemo atque aliquid at, velit asperiores tempora earum et sit animi. Aut sequi eaque esse pariatur earum quaerat ad facere beatae, quos, minus dolorum impedit, dolorem vitae sed.</p>
      <div className="container">
        <img src="/about.jpg" alt="about" />
        <div className="content">
                <h3 className='h3'>Let's Connect</h3>
                <div>
                    <p>Phone</p>
                    <span>+90 9090 9090</span>
                </div>
                <div>
                    <p>Email</p>
                    <span>komal@gmail.com</span>
                </div>
                <div>
                    <p>Address</p>
                    <span>Pratap Nagar,Jaipur</span>
                </div>
                <ul>
                    <Link to={"/"} target="_blank"><RiFacebookBoxLine/></Link>
                    <Link to={"/"} target="_blank"><RiFacebookBoxLine/></Link>
                    <Link to={"/"} target="_blank"><RiFacebookBoxLine/></Link>
                </ul>
            </div>
      </div>
    </section>
  )
}

export default Contactus