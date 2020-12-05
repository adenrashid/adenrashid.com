import React from 'react';
import reportit2 from './images/report_it.png';
import reportit3 from './images/report_it_2.png';
import reportit4 from './images/report_it_3.png';
import reportit5 from './images/report_it_4.png';
import SimpleImageSlider from "react-simple-image-slider";

class Scroller extends React.Component {

  constructor() {
    super();
    this.state = {
        useGPURender: true,
        showNavs: true,
        showBullets: true,
        navStyle: 1,
        slideDuration: 0.5,
        bgColor: "#000000",
        slideIndexText: "",
    };
  }

    render() {
        const images = [
            { url: reportit4 },
            { url: reportit2 },
            { url: reportit3 },
            { url: reportit5 },
        ];

        return (
            <div>
                <SimpleImageSlider
                    width={896}
                    height={504}
                    images={images}
                />
            </div>
        );
    }
}

export default function Projects() {
  return (
    <div>
      <h2>An assortment of projects I have completed.</h2>
      <div className="grid-container">
        <div className="individual-item">
          <h2>Report It</h2>
          <p>A React app that uses the Google Maps API. Users can report incidents near their area through searching for their location (autocomplete) or through user current location. Functionality to pin incident on the map, update description, and find specific address using geolocation.</p>
          <p>Tech Used: React, Javascript, Node.js, Surge, react-google-maps/api, use-places-autocomplete, react-geocode, react-router-dom.</p>
          <p>Click Here to Demo: https://report-it-app.surge.sh</p>
          <Scroller />
        </div>
        <div className="individual-item">
          <h2>Tech Tracker</h2>
          <p></p>
          <img src="" alt=""/>
        </div>
        <div className="individual-item">
          <h2>Woofr</h2>
          <p></p>
          <img src="" alt=""/>
        </div>
        <div className="individual-item">
          <h2>Tic Tac Go</h2>
          <p></p>
          <img src="" alt=""/>
        </div>
        <div className="individual-item">
          <h2>adenrashid.com</h2>
          <p></p>
          <img src="" alt=""/>
        </div>
        <div className="individual-item">
          <h2>Old version of adenrashid.com</h2>
          <p></p>
          <img src="" alt=""/>
        </div>
        <div className="individual-item">
          <h2>Digital Clock</h2>
          <p></p>
          <img src="" alt=""/>
        </div>
      </div>
    </div>
  );
}