import client from "../sanity/client";
// update denim jackets tag from best-seller to best selling

export async function getAllCloths() {
  try {
    const query = `{
      "allCloths": *[_type == "cloth" && "all-products" in tags]{name, _id, slug, price, image,tags, colors, sizes},
      "bestSelling": *[_type == "cloth" && "best-selling" in tags]{name, _id, slug, price, image,tags, colors, sizes},
      "newArrival": *[_type == "cloth" && "new-arrivals" in tags]{name, _id, slug, price, image,tags, colors, sizes},
    }`
    const cloth = await client.fetch(query);

    return cloth;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export const fetched = {
  async fetch() {},
};
