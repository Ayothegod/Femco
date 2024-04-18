import DealsCountdown from "./DealsCountdown";
import { Button } from "./ui/button";

export default function DealsOfTheMonth() {
  return (
    <div className="mt-8 mb-16 flex flex-col md:flex-row gap-4">
      {/*  */}
      <div className="w-full md:w-[40%] flex flex-col space-y-3">
        <h2 className="text-2xl sm:text-3xl md:text-2xl font-serif font-bold tracking-wide">
          Deals Of The Month
        </h2>
        <p className="text-sm text-neutral-600 leading-6 tracking-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
          corrupti repellat fugit corporis fugiat ab repellendus modi incidunt
          nulla at.
        </p>
        <Button className="w-full sm:w-fit sm:px-8">Buy Now</Button>

        <div className="">
          <h4 className="font-medium text-lg text-neutral-600 mt-4">
            Hurry, Before it's Too Late!
          </h4>
          <DealsCountdown />
        </div>
      </div>

      <div className="">
        <p>Carousel</p>
      </div>
    </div>
  );
}
