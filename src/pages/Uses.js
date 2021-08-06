import SectionTitle from "../components/SectionTitle";
import "../styles/uses/uses.css";
import extensionData from "../data/extensions";

const Uses = () => {
  return (
    <div className="uses_page">
      <div className="container">
        <SectionTitle
          title="Daily Uses"
          desc="Thing I use in my development workflow"
        />

        <div className="uses_page_header">
          <img
            src="https://res.cloudinary.com/devr-static-assets-db/image/upload/v1628223520/DevR-portfolio/assets/coding_background_h6jt80.png"
            alt="My coding workspace"
          />
        </div>

        <div className="uses_desc_container">
          <h2 className="separate_title">Editor Setup</h2>
          <p>
            I use Visual studio code as my default code editor. I have done a
            lot of customizations in it. I will sharing them one by one.
          </p>
          <h2 className="sub_title">Theme and Font</h2>
          <p>
            For Theme I use many themes based no my mood. I never stick with
            one. But now a days I am using{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://marketplace.visualstudio.com/items?itemName=ahmadawais.shades-of-purple"
            >
              Shades of purple
            </a>{" "}
            a lot. I use{" "}
            <a
              href="https://github.com/microsoft/cascadia-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cascadia Code{" "}
            </a>{" "}
            as my font. For Icons I use{" "}
            <a
              href="https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme"
              target="_blank"
              rel="noopener noreferrer"
            >
              material-icon theme
            </a>{" "}
            I also use the{" "}
            <a
              href="https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              vs code icons
            </a>
            .{" "}
          </p>

          <h2 className="sub_title">Extensions</h2>
          <p>
            I use a lot of extensions in vs code. Which really helps me to boost
            my productivity. I am sharing some of the useful extensions below.
          </p>
          <ol type="1" className="extensions_list">
            {extensionData.map((extension, index) => {
              return (
                <li key={index}>
                  <a
                    href={extension.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {extension.name}
                  </a>
                </li>
              );
            })}
          </ol>

          <h2 className="separate_title">Terminal Setup</h2>
          <p>
            I am on a windows operating system so that's why I found{" "}
            <a
              href="https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              windows terminal
            </a>{" "}
            so useful. I can open multiple tabs here, creating new profiles and
            much more. I am using it with{" "}
            <a
              href="https://ohmyposh.dev/docs/#:~:text=Oh%20My%20Posh%20is%20a,with%20a%20function%20or%20variable."
              target="_blank"
              rel="noopener noreferrer"
            >
              Oh My Posh
            </a>
            .
          </p>
          <div className="single_img">
            <img
              src="https://res.cloudinary.com/devr-static-assets-db/image/upload/v1628225305/DevR-portfolio/assets/Screenshot_159_kfvczp.png"
              alt="My terminal setup image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uses;
