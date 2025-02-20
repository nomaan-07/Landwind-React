function SectionCaption({ className = "", children }) {
  const baseStyles = "text-gray-500 md:text-xl";
  const combinedStyles = `${baseStyles} ${className}`;

  return <p className={combinedStyles}>{children}</p>;
}

export default SectionCaption;
