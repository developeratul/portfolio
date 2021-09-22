import { Button } from "@chakra-ui/react";
import links from "../../data/links";
import assets from "../../data/assets";

const About = () => {
  const { github } = links;
  const { logo } = assets;

  return (
    <section className="about_section" id="about">
      <div className="container">
        <div className="about_section_content_wrapper">
          <div
            className="about_img"
            data-aos="fade-right"
            data-aos-duration="4000"
          >
            <img
              width="500px"
              height="500px"
              src={logo}
              alt="DevR official logo"
            />
          </div>

          <div
            className="about_desc"
            data-aos="fade-up"
            data-aos-duration="4000"
          >
            <h2>Few words about me</h2>
            <p>
              Hi there. I am Ratul. I am a full-stack developer from Bangladesh.
              I build progressive applications using JavaScript. I use
              technologies like React, Next Js, Node, Express and MongoDB. I can
              build modern UIs and effective and scalable api's. I can also
              build Mobile apps with React-Native. I write readable code's which
              are also well refactored. I can learn any new skill faster and get
              started with it. I have experience in using project management
              tools like Github, Jira, Notion etc. I have the confidence to
              build any type of application using this stack. I am open to
              freelance and remote invoices.
            </p>
            <div className="about_section_button">
              <a
                aria-label="devR github profile link"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button aria-label="DevR github account link" variant="solid">
                  Visit My Github
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
