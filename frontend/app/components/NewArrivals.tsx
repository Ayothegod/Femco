import { imageNumbers } from "~/lib/database";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import image2svg from "../fascoAsset/image 2.svg"
// import image2svg from "../fascoAsset/image 2 (1).svg"

export default function NewArrivals() {
  return (
    <main className="mt-8 mb-16 ">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-2xl font-serif font-bold tracking-wide">
          New Arrivals
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
          delectus vel dolor in ex nobis sint itaque vitae, minus saepe?
        </p>
      </div>



      <Tabs defaultValue="men-fashion">
        <TabsList className="flex items-center justify-between">
          <TabsTrigger value="men-fashion">Men's Fashion</TabsTrigger>
          <TabsTrigger value="women-fashion">Women's Fashion</TabsTrigger>
          <TabsTrigger value="women-accessories">Women Accessories</TabsTrigger>
          <TabsTrigger value="men-accessories">Men Accessories</TabsTrigger>
          <TabsTrigger value="discount">Discount Deals</TabsTrigger>
        </TabsList>

        <TabsContent value="men-fashion">Mens Fashion</TabsContent>
        <TabsContent value="women-fashion">Womens Fashion.</TabsContent>
        <TabsContent value="women-accessories">Womens Accessories</TabsContent>
        <TabsContent value="men-accessories">mens Accessories</TabsContent>
        <TabsContent value="discount">Discount Deals</TabsContent>
      </Tabs>

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
