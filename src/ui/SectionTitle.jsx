function SectionTitle({ className = "", children }) {
  const baseStyles =
    "text-2xl font-extrabold leading-tight md:text-3xl xl:text-4xl";
  const combinedStyles = `${baseStyles} ${className}`;

  return <h2 className={combinedStyles}>{children}</h2>;
}

export default SectionTitle;
