import TechItem from "./TechItem.js";

const TechList = () => {
  return (
    <div className="tech-list-container">
      <TechItem name="HTML" url={`https://cdn.svgporn.com/logos/html-5.svg`} />
      <TechItem name="CSS" url="https://cdn.svgporn.com/logos/css-3.svg" />
      <TechItem
        name="JavaScript / ES6+"
        url="https://cdn.svgporn.com/logos/javascript.svg"
      />
      <TechItem name="React JS" url="https://cdn.svgporn.com/logos/react.svg" />
      <TechItem name="Bulma" url="https://cdn.svgporn.com/logos/bulma.svg" />
      <TechItem
        name="Bootstrap"
        url="https://cdn.svgporn.com/logos/bootstrap.svg"
      />
    </div>
  );
};
export default TechList;
