import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div className='Footer'>
      <div className="ContentBox1">
        <div className="Contents01">
          <h3>TEXTILES</h3>
          <p>Location . . </p>
          <p>Textiles@gmail.com</p>
        </div>
        <div className="Contents02">
            <div className="FooterCard">
              <h4>Texttiles</h4>
              <div>Home</div>
              <div>About Us</div>
              <div>Products</div>
              <div>Contact</div>
            </div>
            <div className="FooterCard">
              <h4>Services</h4>
              <div>content</div>
              <div>content</div>
              <div>content</div>
              <div>content</div>
            </div>
            <div className="FooterCard">
              <h4>Follow</h4>
              <div class="SocialMedia">
                <a href="https://www.instagram.com/ap.puuu"  class="SocialIcon">
                <img src="./images/instagram.png" alt="Instagram"/>
                </a>
                <a href="https://www.facebook.com/jishnu.k.3572"  class="SocialIcon">
                <img src="./images/facebook.png" alt="Facebook"/>
                </a>
              </div>
            </div>
        </div>
      </div>
      <div className="ContentBox2">

      </div>
    </div>
  )
}

export default Footer