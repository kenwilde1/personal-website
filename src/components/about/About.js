import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import Experience from "./Experience";

const About = () => {
  return (
    <section className="about has-text-centered">
      <div className="container mb-6">
        <div className="columns is-centered">
          <div className="column is-half about-me-container">
            <div class="content">
              <h3 className="title mt-4" id="about-me">
                About Me
              </h3>
              <p className="about-para">
                Creating simple UIs, configuring databases, deploying and
                connecting it all together is something I am very curious about.
                Every day I seek to tackle new problems, break them down and
                solve them. The bigger the problem, provides an even bigger
                scope for learning.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container is-fluid">
        <div className="columns is-centered is-variable is-1-mobile is-8-desktop">
          <div className="column skill is-two-fifths">
            <div className="box has-text-left p-6">
              <h4 className="title has-text-centered">Skills</h4>
              <div className="full-stack-tech">
                <div className="front-end-tech">
                  <p className="subtitle mt-6">Front-end</p>
                  <FrontEnd />
                </div>
                <div className="back-end-tech">
                  <p className="subtitle mt-6">Back-end</p>
                  <BackEnd />
                </div>
              </div>
            </div>
          </div>
          <div className="column experience is-two-fifths">
            <div className="box">
              <h4 className="title">Experience</h4>
              <Experience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
