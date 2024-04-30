import FollowUs from "~/components/FollowUs";
import Newsletter from "~/components/Newsletter";
import slider from "../../fascoAsset/slider.png";
import { MetaFunction } from "@remix-run/node";
import Crucible from "~/components/utils/Crucible";
import Filters from "~/components/Filters";

export const meta: MetaFunction = () => {
  return [
    { title: "Fasco - Homepage" },
    {
      name: "description",
      content: "Fasco, the home of high quality apparels",
    },
  ];
};

export default function ShopRoute() {
  return (
    <main>
      <section className="pageStyle ">
        <h2 className="text-2xl sm:text-3xl md:text-2xl font-serif font-bold tracking-wide text-center">
          Fashion
        </h2>
        <Crucible backLink="/" backTitle="Home" presentTitle="Fashion" />
      </section>

      <section className="pageStyle mt-8 flex">
        {/* filter */}
        <aside className="hidden md:block w-[25%] lg:w-[20%]">
          <h3 className="text-xl font-serif font-bold tracking-wide">
            Filters
          </h3>
          <Filters/>
        </aside>

        {/* products */}
      </section>

      {/* <section className="hidden md:block mt-16 mb-16">
        <img src={slider} alt="top-banner-image" className="" />
      </section> */}

      {/* Follow us on instagram */}
      {/* <FollowUs /> */}

      {/* Newsletter */}
      {/* <Newsletter /> */}
    </main>
  );
}
