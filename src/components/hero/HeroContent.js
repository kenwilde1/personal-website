import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

const HeroContent = () => {
  library.add(fab);

  return (
    <div className="columns is-centered">
      <div className="column">
        <h1>
          Hi, I'm{" "}
          <a
            href="/"
            className="typewrite"
            data-period="2000"
            data-type='[ "Kenny.", "a Coder.", "a UI Designer." ]'
            id="highlight"
          >
            <span className="wrap"></span>
          </a>
        </h1>
        <p className="intro mt-6">
          Full Stack Software Developer that loves to create simple, responsive
          UIs and then tying it together with a back-end.
        </p>
        <div className="hero-links mt-5">
          <a
            className="hero-link"
            id="linkedin-hero"
            href="https://www.linkedin.com/in/kenny-wilde-3831b6141/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <span>LinkedIn</span>
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
          </a>
          <a
            className="hero-link"
            id="github-hero"
            href="https://github.com/kenwilde1"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <span>Github</span>
            <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default HeroContent;
