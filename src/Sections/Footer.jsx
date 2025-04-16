import { socialImgs } from '../constants';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>💻&nbsp;&nbsp;&nbsp;Happy Coding</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a href={socialImg.url} key={index} className="icon">
              <img src={socialImg.imgPath} alt="social icon" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">© {new Date().getFullYear()} Amin Esmaeili.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
