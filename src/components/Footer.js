import assets from "../data/assets";
import links from "../data/links";
import { IconButton } from "@chakra-ui/react";
import {
  FacebookFilled,
  GithubFilled,
  LinkedinFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";

const Footer = () => {
  const { facebook, twitter, linkedin, github } = links;
  const { roundedLogo } = assets;

  return (
    <section className="footer">
      <div className="container">
        <div className="footer_content_wrapper">
          <div className="footer_logo">
            <img src={roundedLogo} alt="Rounded Main logo" />
          </div>

          <ul className="footer_links">
            <li>
              <a
                href={facebook}
                arial-label="devR facebook account link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  arial-label="devR facebook account link"
                  variant="solid"
                  colorScheme="facebook"
                >
                  <FacebookFilled />
                </IconButton>
              </a>
            </li>
            <li>
              <a
                arial-label="devR github account link"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  variant="solid"
                  arial-label="devR github account link"
                  colorScheme="blackAlpha"
                >
                  <GithubFilled />
                </IconButton>
              </a>
            </li>
            <li>
              <a
                href={twitter}
                arial-label="devR twitter account link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  arial-label="devR twitter account link"
                  variant="solid"
                  colorScheme="twitter"
                >
                  <TwitterCircleFilled />
                </IconButton>
              </a>
            </li>
            <li>
              <a
                arial-label="devR linkedin account link"
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  arial-label="devR linkedin account link"
                  variant="solid"
                  colorScheme="linkedin"
                >
                  <LinkedinFilled />
                </IconButton>
              </a>
            </li>
          </ul>

          <div className="copyright">
            Created with <span>❤</span> by DevR
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
