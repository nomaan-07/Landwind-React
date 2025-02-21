import { useCallback, useEffect, useState } from "react";
import Icon from "./Icon";

function BackToTop() {
  const [isScrolled, setIsScrolled] = useState(false);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <button
      className={`fixed bottom-3 right-3 flex size-9 items-center justify-center rounded-full bg-purple-600 transition-all ${isScrolled ? "" : "pointer-events-none opacity-0"}`}
      onClick={handleClick}
    >
      <Icon className="size-5 text-white" icon="arrow-up" />
    </button>
  );
}

export default BackToTop;
