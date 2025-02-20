import { useToggleMenu } from "../hooks/useToggleMenu";

function Overlay() {
  const { isOpen, toggleOpen } = useToggleMenu();

  return (
    <div
      onClick={toggleOpen}
      className={`fixed inset-0 z-40 h-screen bg-purple-600/5 backdrop-blur-sm transition-all duration-300 md:hidden ${isOpen ? "w-full" : "w-0"}`}
    ></div>
  );
}

export default Overlay;
