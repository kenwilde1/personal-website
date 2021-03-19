const TechItem = (props) => {
  return (
    <div className="tech-container">
      <img src={props.url} alt={props.name} height="25" width="25" />
      <span>{props.name}</span>
    </div>
  );
};
export default TechItem;
