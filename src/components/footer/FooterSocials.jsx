import Icon from "../../ui/Icon";

const socials = [
  {
    id: 1,
    url: "#",
    color: "#333",
    icon: "github",
  },
  {
    id: 2,
    url: "#",
    color: "#1DA1F2",
    icon: "twitter",
  },
  {
    id: 3,
    url: "#",
    color: "#ea4c89",
    icon: "dribbble",
  },
  {
    id: 4,
    url: "#",
    color: "#1877F2",
    icon: "facebook",
  },
];

function FooterSocials() {
  return (
    <div className="flex items-center justify-center gap-5 text-gray-400">
      {socials.map((social) => (
        <a href={social.url} key={social.id}>
          <Icon
            className={`size-6 transition-all md:hover:text-[${social.color}]`}
            icon={social.icon}
          ></Icon>
        </a>
      ))}
    </div>
  );
}

export default FooterSocials;
