import Button from "../../../ui/Button";
import PricingInfoList from "./PricingInfoList";

const cards = [
  {
    id: 1,
    title: "Starter",
    caption: "Great for personal use and for your side projects.",
    price: 49,
    period: "month",
    infos: [
      { id: 1, title: "Individual configuration", caption: "" },
      { id: 2, title: "No setup, monthly, or hidden fees", caption: "" },
      { id: 3, title: "Team size", caption: "1 developers" },
      { id: 4, title: "Premium support", caption: "6 months" },
      { id: 5, title: "Free updates", caption: "6 months" },
    ],
  },
  {
    id: 2,
    title: "Company",
    caption: "Best for large scale uses and extended redistribution rights.",
    price: 99,
    period: "month",
    infos: [
      { id: 1, title: "Individual configuration", caption: "" },
      { id: 2, title: "No setup, monthly, or hidden fees", caption: "" },
      { id: 3, title: "Team size", caption: "10 developers" },
      { id: 4, title: "Premium support", caption: "24 months" },
      { id: 5, title: "Free updates", caption: "24 months" },
    ],
  },
  {
    id: 3,
    title: "Enterprise",
    caption: "Best for large scale uses and extended redistribution rights.",
    price: 499,
    period: "month",
    infos: [
      { id: 1, title: "Individual configuration", caption: "" },
      { id: 2, title: "No setup, monthly, or hidden fees", caption: "" },
      { id: 3, title: "Team size", caption: "100+ developers" },
      { id: 4, title: "Premium support", caption: "36 months" },
      { id: 5, title: "Free updates", caption: "36 months" },
    ],
  },
];
function PricingCards() {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-6 md:mt-10 md:gap-8 lg:mt-12 lg:gap-10 2xl:gap-14">
      {cards.map((card) => (
        <div
          className="w-[300px] rounded-lg border border-gray-200 p-4 shadow-md md:w-[360px] md:p-6 lg:w-[400px] lg:p-8"
          key={card.id}
        >
          <h3 className="text-center text-xl font-semibold lg:text-2xl">
            {card.title}
          </h3>
          <p className="mt-4 text-center text-gray-500 md:text-lg">
            {card.caption}
          </p>
          <div className="my-4 flex items-center justify-center gap-2.5 md:my-6 lg:my-8">
            <span className="text-3xl font-extrabold leading-none md:text-4xl lg:text-5xl">
              ${card.price}
            </span>
            <span className="self-end font-medium text-gray-500 md:text-lg">
              /{card.period}
            </span>
          </div>
          <PricingInfoList infos={card.infos} />
          <Button type="card">Get started</Button>
        </div>
      ))}
    </div>
  );
}

export default PricingCards;
