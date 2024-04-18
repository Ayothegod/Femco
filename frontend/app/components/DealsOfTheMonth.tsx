import DealsCountdown from "./DealsCountdown";
import { Button } from "./ui/button";

export default function DealsOfTheMonth() {
  return (
    <div className="mt-8 mb-16 flex flex-col md:flex-row gap-4">
      {/*  */}
      <div className="w-full md:w-[40%] border border-red-600 flex flex-col space-y-3">
        <h2 className="text-2xl sm:text-3xl md:text-2xl font-serif font-bold tracking-wide">
          Deals Of The Month
        </h2>
        <p className="text-sm text-neutral-600 leading-6 tracking-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
          corrupti repellat fugit corporis fugiat ab repellendus modi incidunt
          nulla at.
        </p>
        <Button className="w-full sm:w-auto">Buy Now</Button>

        <div>
          <h4 className="font-medium text-lg text-neutral-800">
            Hurry, Before it's Too Late!
          </h4>
          <DealsCountdown />
        </div>
      </div>

      <div className="border border-red-900">Overflower</div>
    </div>
  );
}
