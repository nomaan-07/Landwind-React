const logos = [
  {
    id: 1,
    name: "google",
    src: "images/company-logos/google.png",
  },
  {
    id: 2,
    name: "microsoft",
    src: "images/company-logos/microsoft.png",
  },
  {
    id: 3,
    name: "spotify",
    src: "images/company-logos/spotify.png",
  },
  {
    id: 4,
    name: "mailchimp",
    src: "images/company-logos/mailchimp.png",
  },
  {
    id: 5,
    name: "airbnb",
    src: "images/company-logos/airbnb.png",
  },
  {
    id: 6,
    name: "uber",
    src: "images/company-logos/uber.png",
  },
];

function Logos() {
  return (
    <section className="container mt-20 flex flex-wrap items-center justify-center gap-x-20 gap-y-10 sm:justify-between lg:mt-16 lg:justify-center xl:justify-between">
      {logos.map((logo) => (
        <img
          loading="lazy"
          src={logo.src}
          alt={`${logo.name} logo`}
          key={logo.id}
        />
      ))}
    </section>
  );
}

export default Logos;
