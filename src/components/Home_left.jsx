import React from 'react'
import Connect from './assets/ic_connect.svg'
import Create from './assets/ic_create.svg'
import Learn from './assets/ic_learn.svg'
import Member from './assets/ic_member.svg'
import Notification from './assets/ic_notification.svg'
import Quote from './assets/quote.svg'


const Home_left = () => {

  return (
    <div className="home">
      <div className="home_container1">
        <div className="home_notification">
          <p>ongoing Applications</p>
          <img src={Notification} alt="" />
        </div>
        <div className="home_welcom">
          <div className="img">
            <img src={Quote} alt="" />
          </div>
         <div className="home_text">
            <h1>
            Welcome <br /> to the {"<creek />"}
          </h1>
          <p>
            TechCreek is a habitat for the teeming population of youths making
            sense of their lives with their digital skills and competencies, and
            actively involved in the development of the ‘new economy’ from
            Rivers State.
          </p>
        </div>
         </div>

        <div className="home_Icons">
          <div className="learn_icone">
            <img src={Learn} width="50px" height="50px" alt="" />
            <h4>Learn</h4>
          </div>
          <div className="learn_icon">
            <img src={Create} width="50px" height="50px" alt="" />
            <h4>Create</h4>
          </div>
          <div className="learn_icon">
            <img src={Connect} width="50px" height="50px" alt="" />
            <h4>Connent</h4>
          </div>
        </div>

        <div className="connect_img">
          <img src={Member} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home_left