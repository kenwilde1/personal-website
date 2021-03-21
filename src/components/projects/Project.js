const Project = (props) => {
  return (
    <div className="column project" id={props.id}>
      <figure className="image is-3by2">
        <img src={props.img} alt={props.id} className="project-image" />
        <figcaption className="has-text-centered">
          <h1>{props.title}</h1>
          <div className="project-buttons">
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
              Live
            </a>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};
export default Project;
