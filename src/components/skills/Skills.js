import SkillItem from "./SkillItem";
import html from "../../images/html.svg";
import css from "../../images/css.svg";
import javascript from "../../images/javascript.svg";
import react from "../../images/react.svg";
import bulma from "../../images/bulma.svg";
import bootstrap from "../../images/bootstrap.svg";
import node from "../../images/nodejs.svg";
import firebase from "../../images/firebase.svg";
import aws from "../../images/aws.png";
import django from "../../images/django.svg";
import python from "../../images/python.svg";
import elasticsearch from "../../images/elasticsearch.svg";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="columns">
          <div className="column front-end">
            <div className="front-end-header mb-6">
              <h1 className="title">
                Front-end <span className="highlight">Skills</span>
              </h1>
              <p className="header-line"></p>
            </div>
            <div className="front-end-content">
              <SkillItem name="HTML" url={html} />
              <SkillItem name="CSS" url={css} />
              <SkillItem name="JavaScript / ES6+" url={javascript} />
              <SkillItem name="React JS" url={react} />
              <SkillItem name="Bulma" url={bulma} />
              <SkillItem name="Bootstrap" url={bootstrap} />
            </div>
          </div>
          <div className="column back-end">
            <div className="back-end-header mb-6">
              <h1 className="title">
                Back-end <span className="highlight">Skills</span>
              </h1>
              <p className="header-line"></p>
            </div>
            <div className="back-end-content">
              <SkillItem name="Node JS" url={node} />
              <SkillItem name="Firebase" url={firebase} />
              <SkillItem name="AWS" url={aws} />
              <SkillItem name="Python" url={python} />
              <SkillItem name="Django" url={django} />
              <SkillItem name="Elasticsearch" url={elasticsearch} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
