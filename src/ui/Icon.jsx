function Icon({ className = "", icon }) {
  return (
    <svg className={className}>
      <use href={`./icons.svg#${icon}`}></use>
    </svg>
  );
}

export default Icon;
