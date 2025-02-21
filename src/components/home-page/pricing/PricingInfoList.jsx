import Icon from "../../../ui/Icon";

function PricingInfoList({ infos }) {
  return (
    <ul className="mb-4 space-y-4 text-sm md:mb-8 md:text-base lg:mb-8">
      {infos.map((item) => (
        <li className="flex items-center gap-2.5" key={item.id}>
          <Icon className="size-5" icon="check" />
          <span>
            {item.title}

            {item.caption !== "" && (
              <>
                <span>: </span>
                <span className="font-semibold">{item.caption}</span>
              </>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default PricingInfoList;
