import * as AiIcons from 'react-icons/ai';

export default function Contact() {
  return (
    <div>
      <div className="contact-div">
        <h2 className="contact-h2">Thanks for taking the time to visit my website.
        <br/>
        <br/>
        Visit my Github or LinkedIn here, and download my resume below.
        <br/>
        <br/>
        Feel free to get in touch. </h2>
      </div>
      <div className="contact-links">
        <a href="https://github.com/adenrashid" target="_blank">
          <AiIcons.AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/adenrashid/" target="_blank">
          <AiIcons.AiFillLinkedin />
        </a>
        <a href="src/AdenRashidResume.pdf" download>
          <AiIcons.AiOutlineCloudDownload />
        </a>
      </div>
      <footer className="footer">This site was built using React. Powered by Aden's 🧠  &nbsp; &copy; 2020.</footer>
    </div>
  );
}