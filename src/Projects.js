import React from 'react';
import reportit2 from './images/report_it.png';
import reportit3 from './images/report_it_2.png';
import reportit4 from './images/report_it_3.png';
import reportit5 from './images/report_it_4.png';
import techtracker from './images/tech_tracker.png';
import techtracker2 from './images/tech_tracker_2.png';
import woofr from './images/woofr.png';
import woofr2 from './images/woofr_2.png';
import woofr3 from './images/woofr_3.png';
import woofr4 from './images/woofr_4.png';
import tictacgo from './images/tic_tac_go.png';
import tictacgo2 from './images/tictacgo2.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const project1 = [
  { url: reportit2 },
  { url: reportit3 },
  { url: reportit4 },
  { url: reportit5 },
]

const project2 = [
  { url: techtracker },
  { url: techtracker2 },
]

const project3 = [
  { url: woofr },
  { url: woofr2 },
  { url: woofr3 },
  { url: woofr4 },
]

const project4 = [
  { url: tictacgo },
  { url: tictacgo2 },
]

export default function Projects() {

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    className: "slides"
  }

  return (
    <div>
      <div className="grid-container">

        <div className="individual-item">
          <h2 className="project-title">Report It</h2>
          <p className="project-p">A React app that uses the Google Maps API. Users can report incidents near their area through searching for their location (autocomplete) or through user current location. Functionality to pin incident on the map, update description, and find specific address using geolocation.
          <br/><br/>
          Tech Used: React, Javascript, Node.js, Surge, react-google-maps/api, use-places-autocomplete, react-geocode, react-router-dom.
          <br/><br/>
          Click <a href="https://report-it-app.surge.sh" target="_blank" className="project-link">Here</a> to Demo.
          <br/><br/>
          Click <a href="https://github.com/adenrashid/ReportIt" target="_blank" className="project-link">Here</a> for Source Code.</p>
          <div className="slider-div">
            <Slider {...settings}>
              {project1.map(photo => {
                return (
                  <div>
                    <img src={photo.url} alt="" className="slider-imgs"/>
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>

        <div className="individual-item">
          <h2 className="project-title">Tech Tracker</h2>
          <p className="project-p">Co-developed a web scraper API to scan and compare tech prices between two websites - JB Hi Fi and Harvey Norman. Search for a keyword or choose from popular searches. The scraper will return two products to compare the price at both retailers.
          <br/><br/>
          Tech used: Javascript, Node.js, PostgreSQL, Puppeteer, Axios, Express.
          <br/><br/>
          Click <a href="https://github.com/allisonbarnaud/web_scraper_price_compare" target="_blank" className="project-link">Here</a> for Source Code.</p>
          <div className="slider-div">
            <Slider {...settings}>
              {project2.map(photo => {
                return (
                  <div>
                    <img src={photo.url} alt="" className="slider-imgs"/>
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>

        <div className="individual-item">
          <h2 className="project-title">Woofr</h2>
          <p className="project-p">Twitter for dogs. A crud app using RESTful API where users can sign up, upload photos, create posts, update their profile and comment on other posts. All data is saved and can be re-accessed once logged out. Deployed on Heroku.
          <br/><br/>
          Tech used: HTML, CSS, Ruby, Sinatra, PostgreSQL, BCrypt, Cloudinary.
          <br/><br/>
          Click <a href="https://woofr-project2-sei39.herokuapp.com/" target="_blank" className="project-link">Here</a> to Demo.
          <br/><br/>
          Click <a href="https://github.com/adenrashid/woofr_app" target="_blank" className="project-link">Here</a> for Source Code.</p>
          <div className="slider-div">
            <Slider {...settings}>
              {project3.map(photo => {
                return (
                  <div>
                    <img src={photo.url} alt="" className="slider-imgs"/>
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>

        <div className="individual-item">
          <h2 className="project-title">Tic Tac GO</h2>
          <p className="project-p">A monolithic application written in vanilla Javascript to hone problem solving skills. The solution has been deployed to Github pages.
          <br/><br/>
          Tech used: Vanilla Javascript, HTML, CSS.
          <br/><br/>
          Click <a href="https://adenrashid.github.io/tic-tac-go/" target="_blank" className="project-link">Here</a> to Demo.
          <br/><br/>
          Click <a href="https://github.com/adenrashid/tic-tac-go" target="_blank" className="project-link">Here</a> for Source Code.</p>
          <div className="slider-div">
            <Slider {...settings}>
              {project4.map(photo => {
                return (
                  <div>
                    <img src={photo.url} alt="" className="slider-imgs"/>
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>

        <div className="individual-item">
          <h2 className="project-title">And this portfolio website of course.</h2>
          <p className="project-p">Made with React.
          <br/><br/>
          Tech used: React, Javascript, HTML, CSS.
          <br/><br/>
          Click <a href="https://github.com/adenrashid/adenrashid.com" target="_blank" className="project-link">Here</a> for Source Code.</p>
        </div>

      </div>
    </div>
  );
}