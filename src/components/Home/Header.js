import { Button } from "@chakra-ui/react";
import HeaderSvg from "../../assets/header.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header_content_wrapper">
          <div className="header_desc" data-aos="fade-right">
            <p className="tagline">Full-Stack Developer</p>
            <h1>Developer Ratul</h1>
            <p className="bio">
              Hey there I am Ratul. I build stuffs with JavaScript. I am a
              full-stack developer. Open for remote and freelance works.
            </p>
            <div className="header_buttons">
              <div
                className="single_button view_work_button"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <a href="#portfolio">
                  <Button variant="solid">Works</Button>
                </a>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="500"
                className="single_button hire_me_button"
              >
                <a href="#hire_or_contact">
                  <Button variant="solid">Hire Me</Button>
                </a>
              </div>
            </div>
          </div>

          <div className="header_img" data-aos="fade-left">
            <img
              src="https://res.cloudinary.com/devr-static-assets-db/image/upload/v1627880266/DevR-portfolio/illustrations/Header_image_qvufhd.png"
              alt="Header intro illustration"
            />
          </div>
        </div>
      </div>

      <div className="header_svg">
        <img src={HeaderSvg} alt="Header svg" />
      </div>
    </header>
  );
};

export default Header;
