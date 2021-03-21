const SkillItem = (props) => {
  return (
    <div className="skill-item">
      <img src={props.url} alt={props.name} height="30" width="30" />
      <p>{props.name}</p>
    </div>
  );
};
export default SkillItem;
