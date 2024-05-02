import Filters from "../components/build/Filters";
// import FollowUs from "../components/build/FollowUs";
// import Newsletter from "../components/build/Newsletter";
// import slider from "../fascoAsset/slider.png";
import Crucible from "../components/utils/Crucible";

export default function Shop() {
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
  )
}
