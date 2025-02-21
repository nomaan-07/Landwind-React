import Icon from "../../../ui/Icon";

const stats = [
  {
    id: 1,
    icon: "server",
    title: "99.99% uptime",
    caption: "for Flowbite, with zero maintenance downtime",
  },
  {
    id: 2,
    icon: "users",
    title: "600M+ Users",
    caption: "trusted by over 600 million users around the world",
  },
  {
    id: 3,
    icon: "shopping-cart",
    title: "Millions",
    caption: "of transactions per day",
  },
  {
    id: 4,
    icon: "globe",
    title: "100+ countries",
    caption: "have used Flowbite to create functional websites",
  },
];

function SocialStats() {
  return (
    <div className="mt-10 grid gap-10 xs:mt-12 xs:grid-cols-2 xs:gap-12 md:mt-16 md:gap-16 lg:mt-0 lg:w-1/2 lg:gap-8 xl:w-[544px] 2xl:w-1/2">
      {stats.map((item) => (
        <div key={item.id}>
          <Icon className="size-10 md:size-12" icon={item.icon} />

          <h3 className="mb-2 mt-4 text-xl font-bold leading-tight md:text-2xl">
            {item.title}
          </h3>

          <p className="font-light text-gray-500">{item.caption}</p>
        </div>
      ))}
    </div>
  );
}

export default SocialStats;
