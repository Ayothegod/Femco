import type { MetaFunction } from "@remix-run/node";
import DealsOfTheMonth from "~/components/DealsOfTheMonth";
import FollowUs from "~/components/FollowUs";
import NewArrivals from "~/components/NewArrivals";
import Newsletter from "~/components/Newsletter";
import Testimonial from "~/components/Testimonial";
import { Button } from "~/components/ui/button";
import leftBanner from "../../fascoAsset/image 227.png";
import rightBanner from "../../fascoAsset/image 227.png";
import topBanner from "../../fascoAsset/image.png";
import bottomBanner from "../../fascoAsset/image (1).png";
import calvinKleinLogo from "../../fascoAsset/logo.png";
import pradaLogo from "../../fascoAsset/logo (1).png";
import louisVuittonLogo from "../../fascoAsset/logo (2).png";
import chanelLogo from "../../fascoAsset/logo (3).png";
import slider from "../../fascoAsset/slider.png";

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
    <main className="">
      <section className="pageStyle grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="hidden md:block w-full h-[400px] md:h-[500px] bg-gray-300 rounded-md">
          <img
            src={leftBanner}
            alt="top-banner-image"
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="w-full min-h-[80vh] md:h-[500px] bg-white rounded-md flex flex-col">
          <div className="h-[20%] bg-gray-300 rounded-md">
            <img
              src={topBanner}
              alt="top-banner-image"
              className="h-full w-full object-cover object-top"
            />
          </div>

          <div className="h-[60%] p-4 border text-center flex flex-col items-center justify-center gap-4">
            <h2 className="text-7xl md:text-4xl font-bold">ULTIMATE</h2>
            <h2 className="text-8xl md:text-7xl font-bold">SALE</h2>
            <p>NEW COLLECTION</p>
            <Button>Sign up</Button>
          </div>

          <div className="h-[20%] bg-pink-300 rounded-md ">
            <img
              src={bottomBanner}
              alt="bottom-banner-image"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
        <div className="hidden md:block w-full h-[400px] md:h-[500px] bg-gray-300 rounded-md">
          <img
            src={rightBanner}
            alt="top-banner-image"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </section>

      {/* brands */}
      <section className="pageStyle mt-16 mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-2xl font-serif font-bold tracking-wide text-center">
          Sponsors
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:flex md:flex-wrap md:items-center md:justify-between mt-6">
          <img
            src={chanelLogo}
            alt="top-banner-image"
            className="w-24 md:w-36"
          />
          <img
            src={louisVuittonLogo}
            alt="top-banner-image"
            className="w-24 md:w-36"
          />
          <img
            src={pradaLogo}
            alt="top-banner-image"
            className="w-24 md:w-36"
          />
          <img
            src={calvinKleinLogo}
            alt="top-banner-image"
            className="w-24 md:w-36"
          />
        </div>
      </section>

      {/* deals */}
      <DealsOfTheMonth />

      {/* New Arrivals */}
      <NewArrivals />

      <section className="hidden md:block mt-16 mb-16">
        <img src={slider} alt="top-banner-image" className="" />
      </section>

      {/* Follow us on instagram */}
      <FollowUs />

      {/* Testimonial */}
      <Testimonial />

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
}
