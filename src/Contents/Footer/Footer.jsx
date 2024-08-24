import React from 'react'
import './footer.css'
function Footer() {
  return (
  <div className="BoxoutsideFooter">
    <div class="Footer">
        <div class="BoxinsideFooter">
          <div class="FooterLocation">
            <div className="Footerlocation1">
              <h3>𝓛𝓘𝓞𝓡𝓐</h3>
            </div>
            <div className="FooterLocation2">
              <div className="Options">Home</div>
              <div className="Options">About Us</div>
              <div className="Options">Products</div>
              <div className="Options">Shop</div>
              <div className="Options">Contact</div>
            </div>
          </div>
          <div class="FooterOptions">
            <div className="FooterOptions1">
              <h3>𝓛𝓘𝓞𝓡𝓐</h3>
            </div>
            <div className="FooterOptions2">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15718.095483872676!2d76.28049702673064!3d9.97351356880339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0872cb5271eca3%3A0x8a6c6b60f667b1e6!2sElamkulam%2C%20Kochi%2C%20Ernakulam%2C%20Kerala%20682020!5e0!3m2!1sen!2sin!4v1724038471672!5m2!1sen!2sin"
              width="60%" 
              height="100%">
              </iframe>
            </div>
          </div>
          <div class="FooterFeedback">
            <div className="FooterFeedback1">
              <h3>Contact</h3>
            </div>
            <div className="FooterSocialmedia">
              <a href="https://www.instagram.com/"  class="SocialIcon">
                <img src="./images/instagram.png" alt="Instagram"/>
              </a>
              <a href="https://www.linkedin.com/in/"  class="SocialIcon">
                <img src="./images/linkedin.png" alt="LinkedIn"/>
              </a>
              <a href="https://www.facebook.com/"  class="SocialIcon">
                <img src="./images/facebook.png" alt="Facebook"/>
              </a>
            </div>
            <div className="FooterApp">
              <span>Downloadd One Of Our Apps</span>
              <div className="AppBox">
                <button className="Apps">Android</button>
                <button className="Apps">IOS</button>
              </div>
            </div>
          </div>
      </div>
      <div class="LastFooterSection">
          <div class="CompanyPolicy">
            <div className="CopyRight">
            <img src="./images/copyright.png" alt="" /> 2024 LIORA
            </div>
          </div>
          <div class="CompanyPolicy">
              <div className="Policies">Terms Of Use</div>
              <div className="Policies">Privacy Policy</div>
              <div className="Policies">License</div>
              <div className="Policies">Cookies Policy</div>
          </div>
          <div class="CompanyPolicy">
            <p>Designed And Developed By <a href="">-Name-</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer