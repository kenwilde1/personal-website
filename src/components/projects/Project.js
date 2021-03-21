const Project = (props) => {
  return (
    <div
      className="column project is-one-fifth-desktop is-one-quarter-tablet is-half-mobile"
      id={props.id}
    >
      <figure className="image is-3by2">
        <img src={props.img} alt={props.id} className="project-image" />
        <figcaption className="has-text-centered">
          <h1>{props.title}</h1>
          <div className="project-description">
            <p>{props.description}</p>
          </div>
          <div className="project-buttons mb-3">
            <a
              className="button is-rounded is-primary-button"
              href={props.live}
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
            <a
              className="button is-rounded is-primary-button"
              href={props.code}
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          </div>
        </figcaption>
      </figure>
      <div className="project-technologies">
        <img src={props.techOne} alt={props.id} />
        <img src={props.techTwo} alt={props.id} />
        {props.techThree ? (
          <img src={props.techThree} alt={props.id} />
        ) : (
          console.log("no third technology")
        )}
        {props.techFour ? (
          <img src={props.techFour} alt={props.id} />
        ) : (
          console.log("no fourth technology")
        )}
        {props.techFive ? (
          <img src={props.techFive} alt={props.id} />
        ) : (
          console.log("no fifth technology")
        )}
      </div>
    </div>
  );
};
export default Project;
