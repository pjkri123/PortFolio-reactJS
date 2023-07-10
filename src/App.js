import './App.css';
import React from 'react';
import './index.css';
import Navbar from './Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Pdf from './Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faUser, faCopyright } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div>
    <Navbar/>

    {/* Home section start */}
      <section class="home" id="home">
        <div class="max-width">
          <div class="home-content">
            <div class="text-1">Hi There! I'm Puja Kumari</div>
            <div class="text-2">I'm a Developer</div>
          </div>
        </div>
      </section>

      {/* About section start */}
      <section class="about" id="about">
        <div class="max-width">
          <h2 class="title">About Me</h2>
          <div class="about-content">
            <div class="column left">
              <img src={require('./puja.jpg')} alt="Avatar" class="center"/>
            </div>
            <div class="row">
                    <div class="col-lg-6">
                        <ul>
                            <li><i className="bi bi-arrow-right-circle"></i>
                              <strong> Name: </strong>
                              Puja Kumari
                            </li>
                            <li><i className="bi bi-arrow-right-circle"></i>
                            <strong> City: </strong>
                             Gaya
                            </li>
                            <li><i className="bi bi-arrow-right-circle"></i>
                              <strong> Country: </strong>
                              India
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-6">
                        <ul>
                            <li><i className="bi bi-arrow-right-circle"></i>
                              <strong> Age: </strong>
                              21
                            </li>
                            <li><i className="bi bi-arrow-right-circle"></i>
                              <strong> Degree: </strong>
                              Bachelor of Technology
                            </li>
                            <li><i className="bi bi-arrow-right-circle"></i>
                              <strong> Email: </strong>
                              pjkri33@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="details">
                    <p>I am graduated from B.P. Poddar Institute of Management and Technology, Kolkata.</p>
                    <p>I am a Developer. I like programming very much. I want to learn more and become a good web developer.</p>
                </div>
                <div class="download-resume">
                  <ul>
                    <li>
                      <a href={Pdf}>Download Resume</a>
                    </li>
                  </ul>
                </div>
          </div>
        </div>
      </section>


      {/* Skills section start */}
     <section class="skills" id="skills">
        <div class="max-width">
            <h2 class="title">My Skills</h2>
            <p class="heading">I am proficient in Java and also know other programming languages.</p>
            <div class="skills-content">
                <div class="column left">
                    <div class="bars">
                        <div class="info">
                            <span>Java</span>
                            <span>80%</span>
                        </div>
                        <div class="line java"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>Data Structures and Algorithms</span>
                            <span>50%</span>
                        </div>
                        <div class="line DSA"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>Object Oriented Programming</span>
                            <span>90%</span>
                        </div>
                        <div class="line oops"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>Database Management System</span>
                            <span>60%</span>
                        </div>
                        <div class="line dbms"></div>
                    </div>
                    <p class="heading">I can also use HTML, CSS and JavaScript.</p>
                    <div class="bars">
                        <div class="info">
                            <span>HTML</span>
                            <span>60%</span>
                        </div>
                        <div class="line html"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>CSS</span>
                            <span>50%</span>
                        </div>
                        <div class="line css"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>JavaScript</span>
                            <span>40%</span>
                        </div>
                        <div class="line js"></div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    {/* projects section start */}
    <section class="project" id="project">
      <div class="max-width">
        <h2 class="title">Projects</h2>
        <div className="project-list">

          <div className="project-box">
            <img src={require('./clock.jpg')} alt="Project-1" className="project-image" />
            <h3 className="project-title">Clock</h3>
            <p className="project-description">A simple clock made by using java.It is used to provide an access to the current, date and time using a time zone. It inherits the Object class. Because all date-time classes contain a now() function that uses the system clock in the default time zone, using the Clock class is not required.</p>
            <a href="https://github.com/pjkri123/Clock" className="project-link">View Project</a>
          </div>

          <div className="project-box">
            <img src={require('./calculator.jpg')} alt="Project-2" className="project-image" />
            <h3 className="project-title">Calculator</h3>
            <p className="project-description">Made a Simple Calculator using HTML, CSS and JavaScript. This calculator can perform basic mathematical operations like addition, subtraction, multiplication, and division.</p>
            <a href="https://github.com/pjkri123/CALCULATOR" className="project-link">View Project</a>
          </div>

          <div className="project-box">
            <img src={require('./tictactoe.jpg')} alt="Project-3" className="project-image" />
            <h3 className="project-title">Tic-Tac-Toe-Game</h3>
            <p className="project-description">Created a tic tac toe game using java. In this game, two players will be played and you have one print board on the screen where from 1 to 9 number will be displayed or you can say it box number. Now, you have to choose X or O for the specific box number.</p>
            <a href="https://github.com/pjkri123/Tic-Tac-Toe-Game" className="project-link">View Project</a>
          </div>

        </div>
      </div>
    </section>


    {/* contact section start */}
    <section class="contact" id="contact">
        <div class="max-width">
            <h2 class="title">contact me</h2>
            <p class="para">If you are a tech-enthusiast, You can contact me.</p>
            <div class="contact-content">
                <div class="column left">
                    <div class="icons">
                        <div class="row">
                        <div class="fontIcon">
                        <FontAwesomeIcon icon={faUser} /></div>
                            <div class="info">
                                <div class="head">Name</div>
                                <div class="sub-title">Puja Kumari</div>
                            </div>
                        </div>
                        <div class="row">
                        <div class="fontIcon">
                        <FontAwesomeIcon icon={faMapMarkerAlt} /></div>
                            <div class="info">
                                <div class="head">Address</div>
                                <div class="sub-title">Gaya, India</div>
                            </div>
                        </div>
                        <div class="row">
                        <div class="fontIcon">
                        <FontAwesomeIcon icon={faEnvelope} /></div>
                            <div class="info">
                                <div class="head">Email</div>
                                <div class="sub-title">pjkri33@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column right">
                    <div class="text">Message me</div>
                    <form action="#">
                        <div class="fields">
                            <div class="field name">
                                <input type="text" placeholder=" Your Name" required/>
                            </div>
                            <div class="field email">
                                <input type="text" placeholder=" Your Email" required/>
                            </div>
                        </div>
                        <div class="field">
                            <input type="text" placeholder=" Subject" required/>
                        </div>
                        <div class="field textarea">
                            <textarea cols="30" rows="10" placeholder=" Message" required></textarea>
                        </div>
                        <div class="button">
                            <button type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
                <div class="social-profiles">
                    <h2>Social Profiles</h2>
                    <div class="profiles">
                        <a href="https://www.facebook.com/profile.php?id=100041886606475" class="facebook">
                        <FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="https://www.instagram.com/_puja_kri_/" class="instagram">
                        <FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://www.linkedin.com/in/puja-kumari-0615611b4/" class="linkedin">
                        <FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* footer section start */}
    <footer>
       <span>
           <span><FontAwesomeIcon icon={faCopyright} /></span>
           <span> Copyright 2021  |</span>
           <span class="creater-name">  Puja  </span>
           |  All Rights Reserved.</span>
    </footer>
    </div>
  );
}

export default App;