import { useState } from "react";
import Avatar from "avataaars";

const HeroContent = () => {
  const [isHovered, setHovered] = useState(false);

  return (
    <div className="columns is-centered">
      <div className="column">
        <span
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {isHovered ? (
            <Avatar
              style={{
                backgroundColor: "#07b9f5",
                borderRadius: "50%",
                height: "180px",
                width: "180px",
                border: "2px solid white",
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
                height: "180px",
                width: "180px",
                border: "2px solid white",
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
        <h3 className="title mt-6">Full Stack Software Developer</h3>
        <p className="intro mt-6">
          Hi 👋 &nbsp;I'm Kenny, a Software Developer from Dublin. <br /> I love
          to create simple and interactive web applications using both front-end
          & back-end technologies.
        </p>
      </div>
    </div>
  );
};
export default HeroContent;
