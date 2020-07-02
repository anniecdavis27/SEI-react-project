// This is the about me page, it will link to my portfolio
import React, {useState} from 'react';
import Modal from '../Modal/Modal';
import './About.scss';

function About() {

  const [showModal, setShowModal] = useState(false)

  const toggleModal = (e) => {
    setShowModal(!showModal)
  }

  return (
    <div className="about">
        <h1>About Cirrus</h1>
        
          <p>Air pollution is responsible for as many as 6 million premature deaths around the world anually, making it the biggest environmental risk for death globally.
            The US, alone, sees about 60,000 premature deaths per year due to poor air quality. 
            <br />
            <br />
            The worst part about these statistics is that air pollution can be
            affecting personal health well before local pollution levels become severe enough to be visible -- thus, making it an invisible threat.
            <br />
            <br />
            Cirrus is an air quality tracking application that uses IQ Air's AirVisual API to provide local air quality data to any location in the US. The idea behind Cirrus
            is to make data more easily accessible so that people can gain a better understainding of the quality of air they are breathing in every day. 
            <br />
            <br />
            Ultimately, there are a lot of changes that need to be made to improve global air quality, but none of those changes can be set into motion until the 
            threat becomes visible. 
            <br />
            <br />
            Cirrus was designed by Annie Davis for submission as a unit project for General Assembly's Software Engineering Immersive. To see more of her work, please 
            visit  <span onClick={toggleModal}>www.anniechasedavis.com</span>. 
          </p>
          {showModal ? (<Modal>
            <h1>Are you sure you would like to leave this page?</h1>
                <div className="buttons">
                <a href='http://www.anniechasedavis.com'><button>Yes</button></a>
                <button onClick={toggleModal}>No</button>
                </div>
           </Modal>) : null}
    </div>
  );
}

export default About;