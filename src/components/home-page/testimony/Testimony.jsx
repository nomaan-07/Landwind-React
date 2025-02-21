import Icon from "../../../ui/Icon";

const testimony = {
  name: "Micheal Gough",
  quot: "&quot;Flowbite is just awesome. It contains tons of pre designed components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application quot",
  imageUrl: "images/avatar.png",
  role: "CEO at Google",
};

function Testimony() {
  return (
    <section className="bg-gray-50 py-16 md:py-20 lg:py-24">
      <div className="container flex max-w-[768px] flex-col items-center justify-center gap-6">
        <Icon className="size-10 md:size-12" icon="quotes" />

        <p className="text-center text-lg font-semibold leading-relaxed sm:text-xl md:text-2xl">
          {testimony.quot}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-semibold leading-tight sm:gap-3 sm:text-base">
          <img src={testimony.imageUrl} className="size-6" alt="avatar" />
          <span>{testimony.name}</span>
          <span>|</span>
          <span className="font-Inter text-sm text-gray-500">
            {testimony.role}
          </span>
        </div>
      </div>
    </section>
  );
}

export default Testimony;
