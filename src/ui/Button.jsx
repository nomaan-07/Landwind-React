function Button({ type, children }) {
  // Types: primary - small - secondary - card
  const baseStyles =
    "rounded-lg font-medium text-center transition-colors delay-75 duration-150 cursor-default md:cursor-pointer";
  const mainStyles = `${baseStyles} bg-purple-600 text-white md:hover:bg-purple-700`;

  const combinedStyles = {
    primary: `${mainStyles} px-5 py-3`,
    secondary: `${baseStyles} px-5 py-3 border border-gray-200 md:hover:bg-gray-100`,
    small: `${mainStyles} px-3 py-2 text-sm`,
    card: `${mainStyles} w-full py-2.5 text-sm`,
  };

  return <button className={combinedStyles[type]}>{children}</button>;
}

export default Button;
