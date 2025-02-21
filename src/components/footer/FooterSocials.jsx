import Icon from "../../ui/Icon";

const socials = [
  {
    id: 1,
    url: "#",
    hoverColorClass: "md:hover:text-[#333]",
    name: "github",
  },
  {
    id: 2,
    url: "#",
    hoverColorClass: "md:hover:text-[#1DA1F2]",
    name: "twitter",
  },
  {
    id: 3,
    url: "#",
    hoverColorClass: "md:hover:text-[#ea4c89]",
    name: "dribbble",
  },
  {
    id: 4,
    url: "#",
    hoverColorClass: "md:hover:text-[#1877F2]",
    name: "facebook",
  },
];

function FooterSocials() {
  return (
    <div className="flex items-center justify-center gap-5 text-gray-400">
      {socials.map((social) => (
        <a href={social.url} key={social.id}>
          <Icon
            className={`size-6 transition-all ${social.hoverColorClass}`}
            icon={social.name}
          ></Icon>
        </a>
      ))}
    </div>
  );
}

export default FooterSocials;
