import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import maleSvg from "../fascoAsset/image 2.svg";
import femaleSvg from "../fascoAsset/image 3.svg";
import female1Png from "../fascoAsset/Rectangle 19280.png";
import female2Png from "../fascoAsset/Rectangle 19280 (1).png";
import femaleFashion from "../fascoAsset/Images.png";
import { Button } from "./ui/button";
import { useRef, useState } from "react";

export default function NewArrivals() {
  const tabsTrigger = [
    { value: "men-fashion", text: "Men's Fashion" },
    { value: "women-fashion", text: "Women's Fashion" },
    { value: "women-accessories", text: "Women Accessories" },
    { value: "men-accessories", text: "Men Accessories" },
    { value: "discount", text: "Discount Deals" },
  ];

  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  const handleButtonClick = (index: any) => {
    setSelectedButtonIndex(index);
  };

  return (
    <main className="pageStyle mt-8 mb-16 overflow-x-hidden">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-2xl font-serif font-bold tracking-wide">
          New Arrivals
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
          delectus vel dolor in ex nobis sint itaque vitae, minus saepe?
        </p>
      </div>

      <Tabs defaultValue="men-fashion" className="mt-4">
        <TabsList className="flex items-center justify-between overflow-x-scroll sm:overflow-x-hidden">
          {tabsTrigger.map((tab, index) => (
            <TabsTrigger
              value={tab.value}
              className={`w-full relative`}
              key={index}
              onClick={() => handleButtonClick(index)}
            >
              {tab.text}
              <span
                className={`${
                  selectedButtonIndex !== index &&
                  "absolute w-2 h-2 bg-red-500 right-2 top-1 rounded-full animate-ping"
                } `}
              ></span>
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="mt-4">
          <TabsContent value="men-fashion">
            <div className="p-1">
              <img
                src={femaleFashion}
                alt="image@svg"
                className="h-48 w-full sm:w-48 object-cover object-top"
              />
            </div>
          </TabsContent>
          <TabsContent value="women-fashion">
            <img
              src={femaleSvg}
              alt="image@svg"
              className="h-48 w-48 object-cover object-top"
            />
          </TabsContent>
          <TabsContent value="women-accessories">
            <img
              src={female2Png}
              alt="image@svg"
              className="h-48 w-48 object-cover"
            />
          </TabsContent>
          <TabsContent value="men-accessories">
            <img
              src={maleSvg}
              alt="image@svg"
              className="h-48 w-48 object-cover object-top"
            />
          </TabsContent>
          <TabsContent value="discount">
            {" "}
            <img
              src={female1Png}
              alt="image@svg"
              className="h-48 w-48 object-cover"
            />
          </TabsContent>
        </div>
      </Tabs>
      <div className="mt-8 flex items-center justify-center ">
        <Button className="w-full sm:w-fit sm:px-8">View More</Button>
      </div>

      {/* <div>
        {imageNumbers.map((image, index) => (
          <img
            key={index}
            src={`https://picsum.photos/200/200?id=1&format=png`}
            alt="image alts"
          />
        ))}
      </div> */}
    </main>
  );
}

// <TabsTrigger value="men-fashion" className=" w-full">
//   Men's Fashion
// </TabsTrigger>
// <TabsTrigger value="women-fashion" className="relative w-full">
//   Women's Fashion
//   <span className="absolute w-2 h-2 bg-red-600 right-2 top-1 rounded-full animate-ping"></span>
// </TabsTrigger>
// <TabsTrigger value="women-accessories" className=" w-full">
//   Women Accessories
// </TabsTrigger>
// <TabsTrigger value="men-accessories" className=" w-full">
//   Men Accessories
// </TabsTrigger>
// <TabsTrigger value="discount" className=" w-full">
//   Discount Deals
// </TabsTrigger>
