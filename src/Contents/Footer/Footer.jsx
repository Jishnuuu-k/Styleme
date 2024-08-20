import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div className='Footer'>
      <div className="BoxinsideFooter">
        <div className="FooterLocation">
          <div><h4>Textiles</h4></div>
          <div className="Location">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15718.095483872676!2d76.28049702673064!3d9.97351356880339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0872cb5271eca3%3A0x8a6c6b60f667b1e6!2sElamkulam%2C%20Kochi%2C%20Ernakulam%2C%20Kerala%20682020!5e0!3m2!1sen!2sin!4v1724038471672!5m2!1sen!2sin"
              width="100%" 
              height="200">

              </iframe>
          </div>
        </div>
        <div className="FooterOptions">
          <h4>Textiles</h4>
          <div className="BoxinsideFooterOptions">
            <div className="Options">Home</div>
            <div className="Options">About Us</div>
            <div className="Options">Products</div>
            <div className="Options">Shop</div>
            <div className="Options">Contact</div>
          </div>
        </div>
      </div>
      <div className="FooterFeedback">
        <div className="BoxInsideFeeback">
          <input type="text" placeholder='Enter Your Name' className='Data'/>
          <input type="email" placeholder='Enter Email' className='Data'/>
          <textarea name="feedback" className="feedback" rows={10} cols={40} placeholder='Message'></textarea><br />
          <input type="submit" placeholder='Submit' className='Submit'/>
        </div>
      </div>
    </div>
  )
}

export default Footer