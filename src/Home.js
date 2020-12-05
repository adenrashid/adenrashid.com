import React from 'react';
import Typical from 'react-typical';
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
          <Typical
            steps={['Hi there :)', 2000, 'My name is Aden Rashid.', 2000, `I'm a Dentist turned Software Engineer based in Melbourne.`, 2000, 'Feel free to get in touch...', 2000, 'Thanks for stopping by!', 2000]}
            loop={Infinity}
            wrapper="p"
          />
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
      <footer className="footer">This site was built using React. Powered by Aden's 🧠  &nbsp; &copy; 2020.</footer>
    </div>
    )
}