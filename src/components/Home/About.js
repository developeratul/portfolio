import { Button } from "@chakra-ui/react";
import links from "../../data/links";
import assets from "../../data/assets";

const About = () => {
  const experience = new Date().getFullYear() - 2019;
  const { github } = links;
  const { logo } = assets;

  return (
    <section className="about_section">
      <div className="container">
        <div className="about_section_content_wrapper">
          <div className="about_img">
            <img src={logo} alt="DevR official logo" />
          </div>

          <div className="about_desc">
            <h2>Few words about me</h2>
            <p>
              Hi there. I am Ratul. I am a full-stack developer from Bangladesh.
              I build progressive applications using JavaScript. I have almost{" "}
              {experience} years of experience as a full-stack developer. I have
              worked on large scale applications which you can browse from my
              github or you can also scroll down to browse some of them. Most of
              my projects are created using the MERN stack. This is my favorite
              tech stack and I feel so comfortable with it. I have a nice
              experience in building good looking front-ends. I am also very
              good at back-end and Database management. I use non-relational
              databases. But I am interested in relational databases also. I am
              passionate about what I do.
            </p>
            <div className="about_section_button">
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Button variant="solid">Visit My Github</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
