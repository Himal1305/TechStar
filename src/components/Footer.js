import React from 'react'
import "../styles/footer.css"

export default function Footer() {
  return (
    <div className='footermain'>
        <div className='foright'>
            <h3>TECHYSTAR</h3>
            <p>@all right reserved</p>
        </div>
        <div className='fooleft'> 
        <h3>Follow-us</h3>
        <div className='flink'>
                <p> <a href='/'>Youtube</a></p>
                <p> <a href='/'>Instagram</a></p>
                <p> <a href='/'>Github</a></p>

        </div>

        </div>
    </div>
  )
}
