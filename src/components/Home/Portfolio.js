import SectionTitle from "../SectionTitle";
import portfolioData from "../../data/portfolio";
import { Button } from "@chakra-ui/react";
import { GithubOutlined, LoginOutlined } from "@ant-design/icons";

const Portfolio = () => {
  return (
    <section className="portfolio_section" id="portfolio">
      <div className="container">
        <SectionTitle title="Portfolio" desc="Works I have done" />

        <div className="portfolio_card_container">
          {portfolioData.map((item) => {
            return (
              <div
                className="single_card"
                key={item.id}
                data-aos={item.animation}
              >
                <div
                  className="card_image"
                  style={{ background: `url(${item.img})` }}
                ></div>

                <div className="card_desc">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>

                  <div className="card_buttons">
                    <div className="single_button">
                      <a
                        href={item.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="github repo link"
                      >
                        <Button aria-label="github repo link" variant="solid">
                          <span>
                            <GithubOutlined />
                          </span>
                          Repo
                        </Button>
                      </a>
                    </div>
                    <div className="single_button">
                      <a
                        href={item.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="demo link"
                      >
                        <Button aria-label="demo liked button" variant="solid">
                          <span>
                            <LoginOutlined />
                          </span>
                          Demo
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
