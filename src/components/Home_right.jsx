import React from 'react'
import location from './assets/location.svg'
import Logo from './assets/logo-white.png'

const Home_right = () => {

  return (
    <div className="learning">
      <div className="learning_img">
        <div className="learning_div1">
          <div className="logo">
            <a href="">
              <img src={Logo} alt="" />
            </a>
          </div>
          <div className="empty"></div>

          <h2>
            A <br /> habitat <br /> for <br /> Creativity
          </h2>
        </div>

        <div className="divflex">
          <div className="div2"></div>
          <div className="div3"></div>
        </div>

        <div className="location">
          <div className="location_ict">
            <img src={location} alt="" />
            <p>
              Rivers State ICT Center. Opp. Pleasure Park Aba Road, Port
              <br /> Harcourt. Rivers State, Nigeria.{" "}
              <a href="talk@techcreek.Nigeria">talk@techcreek.ng</a>
            </p>
          </div>
          <p className="phone">
            <a href=" O9030003185, 09030003180"> O9030003185, 09030003180</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home_right
