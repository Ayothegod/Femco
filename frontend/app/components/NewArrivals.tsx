import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import maleSvg from "../fascoAsset/image 2.svg";
import femaleSvg from "../fascoAsset/image 3.svg";
import female1Png from "../fascoAsset/Rectangle 19280.png";
import female2Png from "../fascoAsset/Rectangle 19280 (1).png";
import { Button } from "./ui/button";

export default function NewArrivals() {
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
          <TabsTrigger value="men-fashion">Men's Fashion</TabsTrigger>
          <TabsTrigger value="women-fashion">Women's Fashion</TabsTrigger>
          <TabsTrigger value="women-accessories">Women Accessories</TabsTrigger>
          <TabsTrigger value="men-accessories">Men Accessories</TabsTrigger>
          <TabsTrigger value="discount">Discount Deals</TabsTrigger>
        </TabsList>

        <div className="mt-4">
          <TabsContent value="men-fashion">
            <img
              src={maleSvg}
              alt="image@svg"
              className="h-48 w-48 object-cover object-top"
            />
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
