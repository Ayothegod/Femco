import type { MetaFunction } from "@remix-run/node";
import DealsOfTheMonth from "~/components/DealsOfTheMonth";

export const meta: MetaFunction = () => {
  return [
    { title: "Femco - Homepage" },
    {
      name: "description",
      content: "Femco, the home of high quality apparels",
    },
  ];
};

export default function Index() {
  return (
    <main className="pageStyle">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="hidden md:block w-full h-[400px] md:h-[500px] bg-gray-300 rounded-md"></div>
        <div className="w-full min-h-[80vh] md:h-[500px] bg-white rounded-md flex flex-col">
          <div className="h-[20%] bg-gray-300 rounded-md">11111111111</div>

          <div className="h-[60%] p-4 border text-center flex flex-col items-center justify-center gap-4">
            <h2 className="text-7xl md:text-4xl font-bold">ULTIMATE</h2>
            <h2 className="text-8xl md:text-7xl font-bold">SALE</h2>
            <p>NEW COLLECTION</p>
            <button className="bg-black py-2 px-8 rounded-md text-white text-sms font-medium ">
              Sign up
            </button>
          </div>

          <div className="h-[20%] bg-pink-300 rounded-md ">222222222222</div>
        </div>
        <div className="hidden md:block w-full h-[400px] md:h-[500px] bg-gray-300 rounded-md"></div>
      </section>

      {/* brands */}
      <section className="mt-8 mb-16">
        <p className="font-bold text-3xl">Hello Kitty</p>
      </section>

      {/* deals */}
      <DealsOfTheMonth/>
    </main>
  );
}
