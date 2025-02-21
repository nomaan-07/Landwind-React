import { footerMenus } from "./footerMenus";

function FooterNav() {
  return (
    <div className="flex flex-wrap justify-between gap-x-5 gap-y-8 sm:gap-y-10">
      {footerMenus.map((menu) => (
        <ul className="w-[150px] space-y-4 sm:w-[176px]" key={menu.id}>
          <h5 className="text-xs font-semibold uppercase sm:text-sm">
            {menu.title}
          </h5>
          {menu.items.map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                className="text-sm text-gray-500 transition-colors sm:text-base md:hover:text-purple-600"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default FooterNav;
