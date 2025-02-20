function HeroTitle({ children }) {
  return (
    <h1 className="text-3xl font-black sm:text-4xl md:text-5xl xl:text-6xl">
      {children}
    </h1>
  );
}

export default HeroTitle;
