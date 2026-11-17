import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg) => (
            <a
              key={socialImg.name}
              className="icon"
              href={socialImg.link}
              aria-label={socialImg.name}
              target="_blank"
              rel="noreferrer"
            >
              <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Michael Mlonyeni. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
