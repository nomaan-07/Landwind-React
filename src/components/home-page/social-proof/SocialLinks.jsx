import Icon from "../../../ui/Icon";

const links = [
  { id: 1, title: "Explore Legality Guide", url: "#" },
  { id: 2, title: "Visit the Trust Center", url: "#" },
];

function SocialLinks() {
  return (
    <div className="mt-6 space-y-4 font-medium text-purple-600">
      {links.map((link) => (
        <a
          href={link.url}
          className="flex items-center gap-2 transition-colors md:hover:text-purple-700"
          key={link.id}
        >
          <span>{link.title}</span>
          <Icon className="size-4" icon="arrow-right" />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
