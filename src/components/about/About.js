import { useState } from "react";
import Avatar from "avataaars";

const About = () => {
  const [isHovered, setHovered] = useState(false);

  return (
    <section id="about-me">
      <div className="container">
        <div className="columns">
          <div className="column about-container">
            <div className="about-me-header">
              <h1 className="title">
                About <span className="highlight">Me</span>
              </h1>
            </div>
            <div className="about-me-content">
              <p className="about-me-education">
                I received a BSc for Enterprise Computing, DCU in 2019. During
                my studies I learned a lot about programming fundamentals,
                database management, software process and quality assurance
                improvement. It gave me a good foundation for what I work on
                today.
              </p>
              <p className="about-me-employment">
                After University, I started in AWS as a Cloud Support Associate.
                On a daily basis, I worked with AWS services such as EC2, S3,
                Elasticsearch and more. It provided me with a lot of knowledge
                of how cloud computing operates.
              </p>
              <p className="about-me-education">
                I decided to leave AWS to pursue Software Developement, I
                enrolled in the Code Institute to follow a supported path to
                becoming a Software Developer.
              </p>
            </div>
          </div>
          <div className="column avatar-pic">
            <span
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {isHovered ? (
                <Avatar
                  style={{
                    backgroundColor: "#07b9f5",
                    borderRadius: "50%",
                    height: "200px",
                    width: "200px",
                    border: "5px solid var(--accent)",
                  }}
                  avatarStyle="Transparent"
                  topType="ShortHairShortWaved"
                  accessoriesType="Blank"
                  hairColor="BlondeGolden"
                  facialHairType="Blank"
                  clotheType="ShirtCrewNeck"
                  clotheColor="Heather"
                  eyeType="Wink"
                  eyebrowType="Default"
                  mouthType="Default"
                  skinColor="Pale"
                />
              ) : (
                <Avatar
                  style={{
                    backgroundColor: "#07b9f5",
                    borderRadius: "50%",
                    height: "200px",
                    width: "200px",
                    border: "5px solid var(--accent)",
                  }}
                  avatarStyle="Transparent"
                  topType="ShortHairShortWaved"
                  accessoriesType="Blank"
                  hairColor="BlondeGolden"
                  facialHairType="Blank"
                  clotheType="ShirtCrewNeck"
                  clotheColor="Heather"
                  eyeType="Default"
                  eyebrowType="Default"
                  mouthType="Default"
                  skinColor="Pale"
                />
              )}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
