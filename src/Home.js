import React from 'react';
import Typical from 'react-typical';
import './App.css';
import photo from './photo.jpg';

export default function Home() {
  return (
    <div className="home-wrap">
      <div>
        <img className="photo" src={photo} alt="aden rashid photo"/>
      </div>
      <div class="type-writer">
        <Typical
          steps={['Hi there!', 2000, 'My name is Aden Rashid.', 2000, `I'm a Dentist turned Software Engineer based in Melbourne.`, 1500, 'Thanks for visiting my website!', 2000]}
          loop={Infinity}
          wrapper="p"
        />
      </div>
    </div>
    )
}