import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  library.add(fab, far);

  return (
    <footer className="section has-text-centered" id="footer">
      <div className="container is-narrow">
        <p className="subtitle mt-3">
          kenwilde<span className="highlight">.net</span> &#169;
        </p>
        <div className="field footer-icons mt-5">
          <a
            className="footer-icon"
            id="linkedin-footer"
            href="https://www.linkedin.com/in/kenny-wilde-3831b6141/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
          </a>
          <a
            className="footer-icon"
            id="github-footer"
            href="https://github.com/kenwilde1"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a
            className="footer-icon"
            id="email-footer"
            href="mailto:kennywilde00@gmail.com"
          >
            <FontAwesomeIcon icon={["far", "envelope"]} />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
