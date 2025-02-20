function Logo() {
  return (
    <a
      href="#"
      className="flex h-8 items-center justify-center gap-2 md:h-9 lg:gap-3"
    >
      <img src="./images/app-logo.png" alt="app logo" />

      <span className="cursor-default text-xl font-semibold delay-75 duration-150 md:cursor-pointer md:hover:text-purple-600 lg:text-2xl">
        Landwind
      </span>
    </a>
  );
}

export default Logo;
