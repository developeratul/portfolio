import { Button } from "@chakra-ui/react";
import Logo from "../../assets/DevR.png";
import links from "../../data/links";

const About = () => {
  const { github } = links;

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
              src={Logo}
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
              Hello, I am Ratul aka DevR. I am a 16 years old Full-Stack
              Developer. I have been coding for 2 years now. I specialize
              building high performing and scalable web applications. I can
              handle the front-end, back-end, the database, deployment and all
              the other things to build a killer web app.
            </p>
            <p>
              My preferred tech stack is{" "}
              <a
                href="https://github.com/t3-oss/create-t3-app"
                target="_blank"
                rel="noreferrer"
              >
                T3
              </a>{" "}
              Which is is fully type safe (both on the client and server) and
              makes your app bulletproof. My primary programming language is
              TypeScript. So I can definitely provide you a really good codebase
              so any other developer can also work on the app. I use Next.Js to
              build front-ends. Next.js is know as a framework for production. I
              use it th TypeScript.
            </p>
            <p>
              I'm open to collaborating on Open source projects, Freelance and
              remote paid works. So if my skills fit your requirements please
              consider hiring me :)
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
