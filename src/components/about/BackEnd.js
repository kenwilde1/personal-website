import TechItem from "./TechItem";

const BackEnd = () => {
  return (
    <div className="tech-list-container">
      <TechItem
        name="Firebase"
        url="https://cdn.svgporn.com/logos/firebase.svg"
      />
      <TechItem
        name="Node"
        url="https://cdn.svgporn.com/logos/nodejs-icon.svg"
      />
      <TechItem
        name="Amazon Web Services"
        url="https://cdn.svgporn.com/logos/aws.svg"
      />
      <TechItem
        name="Elasticsearch"
        url="https://cdn.svgporn.com/logos/elasticsearch.svg"
      />
      <TechItem
        name="Python"
        url="https://cdn.svgporn.com/logos/django-icon.svg"
      />
      <TechItem name="Django" url="https://cdn.svgporn.com/logos/python.svg" />
    </div>
  );
};
export default BackEnd;
