import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div className='Footer'>
        <div className="FooterSection1">

        </div>
        <div className="FooterSection2">
            <div className="MessageBox">
                <input type="text" placeholder='Enter Name' className='Data'/> <input type="email" placeholder='Enter Email' className='Data'/><br />
                <input type="text" placeholder='Write Your Message Here' className='Feedback'/><br />
                <button>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Footer