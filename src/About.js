import * as React from "react";
import { useDencrypt } from "use-dencrypt-effect";

const values = ["hey, i'm aden", "here's a bit about me."];

export default function About() {

  const Decryption = () => {
    const { result, dencrypt } = useDencrypt();
  
    React.useEffect(() => {
      let i = 0;
  
      const action = setInterval(() => {
        dencrypt(values[i]);
  
        i = i === values.length - 1 ? 0 : i + 1;
      }, 3000);
  
      return () => clearInterval(action);
    }, []);
  
    return <div>{result}</div>;
  };

  return (
    <div>
      
      <h2 className="about-heading">{Decryption()}</h2> 
      <p className="about-para">
        I have always enjoyed technology and computing. Ever since I was young, my brother and I would argue about who would get to spend more time on our family desktop - whether it was to browse the internet, play games, solve puzzles, or learn more about the endless possibilities of computers. 
        <br/><br/>
        As I got older I discovered Myspace. I would spend countless hours designing my webpage, changing the HTML, customising the CSS, and crafting layouts for other users. I also loved playing sandbox games in my spare time, because they gave me the creative freedom to build whatever I wanted and enjoy the end product.
        <br/><br/>
        Fast forward a bit. I studied dentistry at university and worked as a dentist for 3 years. I thought this career path would be the perfect blend of creativity and problem-solving. I found though that my desire to be challenged at work every day wasn't being fulfilled. I wanted a career where I could use my analytical skills to problem solve, and do it innovatively and creatively. I also felt that I needed to pursue the passion I always had for tech in a more impactful way. 
        <br/><br/>
        So I decided to learn programming. 
        <br/><br/>
        I did courses on Codecademy, watched tutorials on Youtube, built my portfolio website, worked on small projects and coding problems, and loved every second of it.
        <br/><br/>
        After about a year of self-learning, I was ready to take the next step in my coding journey. I took the plunge and enrolled in the General Assembly Software Engineering Immersive Course. I lived and breathed code for 3 months, learning the fundamentals of developing good quality software.
        <br/><br/>
        The creativity, problem-solving and high attention to detail involved in dentistry tied in perfectly with coding, and for me it was a natural progression. With that, here I am transitioning my career into the wondrous world of tech.
        <br/><br/>
        I believe I am fun, hard-working and determined. I want to implement creative thinking to come up with innovative solutions. Feel free to get in touch.
      </p> 
    </div>
  );
}