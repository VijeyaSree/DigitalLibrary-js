import React from 'react';
import '../About/Aboutus.css';
import a from '../Image/dllogo2.png'; // Import the logo image
import profileIcon from '../Image/logo3.png'; // Import the profile icon image
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {

  return (
    <div>
      <Navbar /> 
     <center>
        <h1 className="zz">Welcome to Our Digital Library</h1>
        <div className="bb">
       
        </div>
        </center>
        <div className="about-us">
        <div  className="cv">
          <center>
        <h3>Our Mission</h3>
        <p>
          Our mission is to democratize access to information and empower individuals, educators,
          and learners worldwide. We strive to build a comprehensive digital library that caters
          to the needs and interests of people from all walks of life.
        </p>
        </center>
        </div>
       
        <div className="cv">
          <center>
        <h3>What We Offer</h3>
        <p>
          
          At our digital library, you'll find a wide range of resources including:
        </p>
        
          <li>Books spanning various genres and subjects</li>
          <li>Academic journals and research papers</li>
          <li>E-books and audiobooks for on-the-go learning</li>
          <li>Interactive multimedia content for engaging learning experiences</li>
          <li>Community forums and discussion boards for knowledge sharing</li>
        
        </center>
       </div>
        <div className="cv">
          <center>
        <h3>Get Involved</h3>
        <p>
          We welcome contributions from authors, publishers, educators, and enthusiasts to enrich
          our digital library. Whether you'd like to donate books, share your knowledge through
          writing, or participate in community discussions, there are various ways to get involved.
          Together, we can create a vibrant hub of learning and discovery.
        </p>
        </center>
        </div>
       
        <div className="cv">
          <center>
        <h3>Contact Us</h3>
        <p>
          If you have any questions, feedback, or suggestions, please feel free to contact us.
          We're here to assist you on your learning journey and continuously improve our platform
          to better serve your needs.
        </p>
        </center>
      
       
        <p id="ig">

        Email: <a href="mailto:info@digital-library.com">info@digital-library.com</a><br />
          Phone: 123-456-7890<br />
          Address: 123 Library Street, City, Country
         
        </p>
        </div>
      </div>
    </div>
  );
};

  

export default AboutUs;

function Navbar() {
  const navi=useNavigate();
  const handlepro=()=>{
    navi('/profile')
  }
  return (
    <div className="navbar">
      <div className="logo-space">
        <img src={a} alt="Logo" width={40} height={40}/>
        <h1>DIGITAL-Library</h1>
      </div>
      <div className="nav-links">
        <a href="/">HOME</a>
      </div>
      <div className="nav-links">
        <a href="/login">SIGN IN</a>
      </div>
      <div className="nav-links">
        <a href="/register">SIGN UP</a>
      </div>
      {/* Add the profile icon and link */}
      <div className="profile-icon">
        
          <img src={profileIcon} alt="Profile" className='profile-icon-img' width={50} height={50} onClick={handlepro}/>
       
      </div>
    </div>
  );
}
