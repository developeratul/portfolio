import { Button } from "@chakra-ui/react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header_content_wrapper">
          <div className="header_desc">
            <p className="tagline">Full-Stack Developer</p>
            <h1>Developer Ratul</h1>
            <p className="bio">
              Hey there I am Ratul. I build stuffs with JavaScript. I am a
              full-stack developer. Open for remote and freelance works.
            </p>
            <div className="header_buttons">
              <div className="single_button view_work_button">
                <Button variant="solid">Works</Button>
              </div>

              <div className="single_button hire_me_button">
                <Button variant="solid">Hire Me</Button>
              </div>
            </div>
          </div>

          <div className="header_img">
            <img
              src="https://res.cloudinary.com/devr-static-assets-db/image/upload/v1627880266/DevR-portfolio/illustrations/Header_image_qvufhd.png"
              alt="Header intro illustration"
            />
          </div>
        </div>
      </div>

      <div className="header_svg">
        <img
          src="https://res.cloudinary.com/devr-static-assets-db/image/upload/v1627800695/DevR-portfolio/shapes/header_wave_vlndim.svg"
          alt="Header svg"
        />
      </div>
    </header>
  );
};

export default Header;
