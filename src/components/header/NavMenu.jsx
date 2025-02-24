import { useToggleMenu } from "../../hooks/useToggleMenu";
import Button from "../../ui/Button";

const items = [
  {
    id: 1,
    name: "Company",
    url: "#",
  },
  {
    id: 2,
    name: "Marketplace",
    url: "#",
  },
  {
    id: 3,
    name: "Features",
    url: "#",
  },
  {
    id: 4,
    name: "Team",
    url: "#",
  },
  {
    id: 5,
    name: "Contact",
    link: "#",
  },
];

function NavMenu({ type }) {
  const { isOpen } = useToggleMenu();

  if (type === "mobile")
    return (
      <ul
        className={`absolute left-0 right-0 top-16 -z-10 flex w-full flex-col items-center gap-5 rounded-b-lg bg-white py-5 font-semibold text-purple-600 transition-all duration-300 ${isOpen ? "translate-x-0" : "translate-x-[100%]"}`}
      >
        {items.map((item) => (
          <li className="w-full text-center" key={item.id}>
            <a className="cursor-default" href={item.url}>
              {item.name}
            </a>
          </li>
        ))}
        <li>
          <Button type="primary">Get started</Button>
        </li>
      </ul>
    );

  return (
    <ul className="flex items-center justify-center gap-4 lg:gap-8">
      {items.map((item) => (
        <li
          className="cursor-pointer transition-colors delay-75 hover:text-purple-600"
          key={item.id}
        >
          <a href={item.url}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
}

export default NavMenu;
