import { json, useLoaderData } from "react-router-dom";
import Filters from "../components/build/Filters";
// import FollowUs from "../components/build/FollowUs";
// import Newsletter from "../components/build/Newsletter";
// import slider from "../fascoAsset/slider.png";
import Crucible from "../components/utils/Crucible";
// import client from "../sanity/client";
import { getAllCloths } from "../services/sanityActions";
import { Hammer, Menu } from "lucide-react";
import { urlFor } from "../components/utils/UrlFor";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectTrigger,
  SelectValue,
  SelectScrollUpButton,
  SelectSeparator,
} from "../components/ui/select";
import { Button } from "../components/ui/button";

export async function Loader() {
  try {
    // const cloth = await getAllCloths();
    // console.log(cloth);
    return json("cloth");
  } catch (error) {
    return json({ error: "An error occured!" });
  }
}

export default function Shop() {
  const loaderData: any = useLoaderData();
  console.log(loaderData);
  return (
    <main className="min-h-[60vh]">
      <section className="pageStyle ">
        <h2 className="text-2xl sm:text-3xl md:text-2xl font-serif font-bold tracking-wide text-center">
          Fashion
        </h2>
        <Crucible backLink="/" backTitle="Home" presentTitle="Fashion" />
      </section>

      <section className="pageStyle mt-8 flex divide-x-4">
        {/* filter */}
        <aside className="hidden md:block w-[25%] lg:w-[20%] px-2">
          <h3 className="text-xl font-serif font-bold tracking-wide">
            Filters
          </h3>
          <Filters />
        </aside>

        {/* products */}
        <main className="px-2 w-full">
          {/* top */}
          <div className="flex items-center justify-between">
            <p>Dropdown</p>
            <div>
              <Menu className="border h-8 w-8 p-1 rounded-md" />
            </div>
          </div>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <Button variant="outline" className="m-0 p-0 border-none outline-none w-full">
                  <SelectItem value="apple">Apple</SelectItem>
                </Button>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <div>
            {loaderData?.allCloths?.map((cloth: any) => (
              <div key={cloth._id}>
                <h3>{cloth.name}</h3>
                <h3>#{cloth.price}</h3>
                <img
                  src={urlFor(cloth.image).width(300).url()}
                  alt={cloth.slug || "Image-alt"}
                />
              </div>
            ))}
          </div>
        </main>
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
