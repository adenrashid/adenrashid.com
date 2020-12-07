import React from 'react';
// import Typical from 'react-typical';
import Typed from 'react-typed';
import './Home.css';
import photo from '/Users/adenrashid/Documents/VS Code/adenrashid.com/src/photo.jpg';
import * as DiIcons from "react-icons/di";
import * as FaIcons from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className="home-wrap">
        <div>
          <img className="photo" src={photo} alt="aden rashid"/>
        </div>
        <div class="type-writer">
          <Typed
            strings={['Hi there :)', 'My name is Aden Rashid.', `I'm a Software Engineer based in Melbourne.`, 'Click on the menu at the top left to see more...', 'Thanks for stopping by!']}
            typeSpeed={40}
            backSpeed={40}
            loop >
          </Typed>
        </div>
      </div>
      <div className="techstack">
        <DiIcons.DiReact />
        <DiIcons.DiJavascript1 />
        <DiIcons.DiRubyRough />
        <FaIcons.FaNodeJs />
        <DiIcons.DiPostgresql />
        <DiIcons.DiSass />
        <DiIcons.DiGithubBadge />
        <DiIcons.DiHtml5 />
        <DiIcons.DiCss3 />
      </div>
    </div>
    )
}