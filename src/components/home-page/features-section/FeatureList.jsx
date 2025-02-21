import Icon from "../../../ui/Icon";

function FeatureList({ options }) {
  return (
    <div className="mt-6 space-y-4 font-medium xl:mt-8">
      {options.map((item) => (
        <div className="flex items-center gap-2" key={item.id}>
          <Icon className="size-5" icon="check-circle" />
          <span>{item.option}</span>
        </div>
      ))}
    </div>
  );
}

export default FeatureList;
