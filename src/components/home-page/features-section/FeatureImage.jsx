function FeatureImage({ className = "", src }) {
  return (
    <div className={`lg:w-1/2 xl:py-2.5 ${className}`}>
      <img src={`./images/${src}`} alt="features" />
    </div>
  );
}

export default FeatureImage;
