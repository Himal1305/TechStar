import React from 'react'
import "../styles/contact.css"

export default function Contact() {
  return (
    <div className='contact'>
      <h2>Contact us</h2>
      <div className='form'>
        <div>
        <label htmlFor="name">Name</label>
          <input id='name' type="text " />
        </div>
        
        <div>
        <label htmlFor="email">Email</label>
          <input id='email' type="email" />
        </div>

        
        <div>
        <label htmlFor="textarea">Message</label>
          <textarea id='textarea' rows={3} type="text" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </div>
    </div>
  )
}
