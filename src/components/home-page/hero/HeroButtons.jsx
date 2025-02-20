import Button from "../../../ui/Button";

function HeroButtons() {
  return (
    <div className="xs:flex-row xs:items-center md:child:cursor-pointer mt-6 flex flex-col gap-4 md:mt-10">
      <Button type="primary">Start 30 day free trial</Button>
      <Button type="secondary">Pricing & FAQ</Button>
    </div>
  );
}

export default HeroButtons;
