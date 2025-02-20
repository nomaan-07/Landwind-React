function Button({ type, children }) {
  // Types: primary - small - secondary - cart
  const base =
    "rounded-lg font-medium text-center transition-colors delay-75 duration-150 cursor-default md:cursor-pointer";
  const main = base + " bg-purple-600 text-white md:hover:bg-purple-700";

  const styles = {
    primary: main + " px-5 py-3",
    secondary: base + " px-5 py-3 border border-gray-200 md:hover:bg-gray-100",
    small: main + " px-3 py-2 text-sm",
    cart: main + " w-full py-2.5 text-sm",
  };

  return <button className={styles[type]}>{children}</button>;
}

export default Button;
