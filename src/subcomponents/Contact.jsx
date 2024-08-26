import React from 'react'
import { Link } from 'react-router-dom'
import { RiFacebookBoxLine } from 'react-icons/ri'

const Contact = () => {
  return (
    <section id='contact_Mini'>
        <div className="super_container">
            <div className="container_1">
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
            <div className="container_2">
                <h3 className="h3">We'd love to hear from you</h3>
                <form action="">
                    <div>
                        <input type="text" placeholder='Your name'/>
                        <input type="email" name="" id="" placeholder='Your email' />
                    </div>
                    <textarea name="" id="" rows="4" placeholder='Your meassage here.....'></textarea>
                    <button type='submit'>SEND</button>
                </form>

            </div>
        </div>
    </section>
  )
}

export default Contact