// import FollowUs from "../components/build/FollowUs";
// import Newsletter from "../components/build/Newsletter";
// import slider from "../fascoAsset/slider.png";
// import client from "../sanity/client";
import {
  ActionFunctionArgs,
  Form,
  LoaderFunctionArgs,
  json,
  useLoaderData,
  useSubmit,
} from "react-router-dom";
import Filters from "../components/build/Filters";
import Crucible from "../components/utils/Crucible";
import { getAllCloths } from "../services/sanityActions";
import { Menu } from "lucide-react";
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
import { useEffect, useState } from "react";
import { Input } from "../components/ui/input";

export async function Loader({ request }: LoaderFunctionArgs) {
  try {
    // const cloth = await getAllCloths();
    // console.log(cloth);

    const url = new URL(request.url);
    // console.log(url);

    const searchParams = new URLSearchParams(url.search);
    const age = searchParams.get("age") || null;
    const search = searchParams.get("search") || null;
    // console.log(age, search);

    return json({ age: age, search: search });
  } catch (error) {
    return json({ error: "An error occured!" });
  }
}

export async function Action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  // const search = await formData.get("search");
  // const age = await formData.get("age");
  // const intent = await formData.get("intent");
  const selectedValue = formData.get("selectedValue");
  if (selectedValue === "allClothing") {
    console.log("allClothing:", selectedValue);
    return null;
  }

  if (selectedValue === "bestSelling") {
    console.log("bestSelling:", selectedValue);
    return null;
  }

  if (selectedValue === "newArrivals") {
    console.log("newArrivals:", selectedValue);
    return null;
  }

  if (selectedValue === "accessories") {
    console.log("accessories:", selectedValue);
    return null;
  }

  // const url = new URL(request.url);
  // const searchParams = new URLSearchParams(url.search);

  // if (search) {
  //   searchParams.set("search", search.toString());
  // }
  // if (age) {
  //   searchParams.set("age", age.toString());
  // }

  // url.search = searchParams.toString();

  // return redirect(url.toString());

  console.log("NOTAVALUE");
  return null;
}

export default function Shop() {
  const loaderData: any = useLoaderData();
  // console.log(loaderData);

  const submit = useSubmit();
  const [selectedValue, setSelectedValue] = useState("");
  const [shouldSubmit, setShouldSubmit] = useState(false);
  const handleSelectChange = (value: any) => {
    setSelectedValue(value);
    setShouldSubmit(!shouldSubmit);
  };

  useEffect(() => {
    if (selectedValue && shouldSubmit) {
      const formData = new FormData();
      formData.append("selectedValue", selectedValue);
      submit(formData, { method: "post" });
      setShouldSubmit(!shouldSubmit);
    }
  }, [selectedValue, submit]);

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
          {/* <Filters /> */}
          <section className="space-y-6 mt-8">
            <div className="space-y-2">
              <h4 className="text-xs font-serif font-bold tracking-wide">
                Size
              </h4>
              <div className="flex items-center justify-between">
                <Button variant="outline" size="sm">
                  S
                </Button>
                <Button variant="outline" size="sm">
                  M
                </Button>
                <Button variant="outline" size="sm">
                  L
                </Button>
                <Button variant="outline" size="sm">
                  XL
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-serif font-bold tracking-wide">
                Prices
              </h4>
              <div className="space-y-2">
                <p className="text-sm text-medium">$0 - $49</p>
                <p className="text-sm text-medium">$50 - $99</p>
                <p className="text-sm text-medium">$100 - $199</p>
                <p className="text-sm text-medium">$200 - $*</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-serif font-bold tracking-wide">
                Collections
              </h4>
              <div className="space-y-2">
                <p className="text-sm text-medium">All products</p>
                <p className="text-sm text-medium">Best sellers</p>
                <p className="text-sm text-medium">New arrivals</p>
                <p className="text-sm text-medium">Accessories</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-serif font-bold tracking-wide">
                Tags
              </h4>
              <div className="flex gap-2 flex-wrap">
                <span className="text-sm text-medium">Fashion</span>
                <span className="text-sm text-medium">Belt</span>
                <span className="text-sm text-medium">Sandals</span>
                <span className="text-sm text-medium">Bags</span>
                <span className="text-sm text-medium">Sunglasses</span>
                <span className="text-sm text-medium">Beachwear</span>
              </div>
            </div>
          </section>
        </aside>

        {/* products */}
        <main className="px-2 w-full">
          <Form method="post">
            <Button
              variant="default"
              name="intent"
              value="allClothing"
              className="m-0 p-0 border-none outline-none w-full font-normal bg-none"
            >
              Log Data
            </Button>
          </Form>

          {/* top */}
          <div className="flex items-center justify-between">
            <Form method="post">
              <input type="hidden" name="selectedValue" value={selectedValue} />
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Collections" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Clothing type</SelectLabel>
                    <SelectItem value="allClothing">All Clothing</SelectItem>
                    <SelectItem value="bestSelling">Best Selling</SelectItem>
                    <SelectItem value="newArrivals">New Arrivals</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* <button type="submit">Submit</button> */}
            </Form>

            <div>
              <Menu className="border h-8 w-8 p-1 rounded-md" />
            </div>
          </div>

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
