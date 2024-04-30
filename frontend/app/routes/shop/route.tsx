import FollowUs from "~/components/FollowUs";
import Newsletter from "~/components/Newsletter";
import slider from "../../fascoAsset/slider.png";
import { MetaFunction } from "@remix-run/node";
import Crucible from "~/components/utils/Crucible";

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

      <section className="pageStyle flex">

        {/* filter */}
        <aside className="hidden md:block w-[20%] border border-red-800">
            <h3>Filters</h3>
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
