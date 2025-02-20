import { useToggleMenu } from "../hooks/useToggleMenu";

function MenuToggleButton() {
  const { isOpen, toggleOpen } = useToggleMenu();

  const openStyles = [
    "w-7 origin-top-left -translate-x-[2px] rotate-45",
    "opacity-0",
    "w-7 origin-bottom-left -translate-x-[1px] translate-y-[2px] -rotate-45",
  ];

  return (
    <button
      onClick={toggleOpen}
      className="flex h-5 w-8 cursor-default flex-col justify-between"
    >
      {Array.from({ length: 3 }, (_, i) => (
        <span
          key={i}
          className={`h-[3px] rounded-3xl bg-purple-600 transition-all ${isOpen ? openStyles[i] : ""}`}
        ></span>
      ))}
    </button>
  );
}

export default MenuToggleButton;
