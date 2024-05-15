import { ID, Query } from "appwrite";
import { account, databases } from "../lib/appwrite";

const DATABASE_ID = "66365ff4002fc7f5522e";
const NEW_ARRIVAL_COLLECTION_ID = "new-arrivals";

export async function getNewArrivals(maleFashion: string, femaleFashion: string) {
  try {
    const maleResult = await fetchNewArrivalFunc.getMaleFashion(maleFashion);
    const femaleResult = await fetchNewArrivalFunc.getFemaleFashion(femaleFashion)

    return {maleResult, femaleResult}
  } catch (error) {
    console.log(error);
    return error;
  }
}

export const fetchNewArrivalFunc = {
  async getMaleFashion(secondTag: string) {
    return await databases.listDocuments(
      DATABASE_ID,
      NEW_ARRIVAL_COLLECTION_ID,
      [
        Query.and([
          Query.contains("tags", ["new-arrival"]),
          Query.contains("tags", [`${secondTag}`]),
        ]),
      ]
    );
  },

  async getFemaleFashion(secondTag: string) {
    return await databases.listDocuments(
      DATABASE_ID,
      NEW_ARRIVAL_COLLECTION_ID,
      [
        Query.and([
          Query.contains("tags", ["new-arrival"]),
          Query.contains("tags", [`${secondTag}`]),
        ]),
      ]
    );
  },

};

export const fetchData = {
  async getAllCollections() {
    try {
      const allCollections = await databases.listDocuments(
        DATABASE_ID,
        NEW_ARRIVAL_COLLECTION_ID
      );
      return allCollections;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  async getNewArrivals() {
    try {
      const newArrivals = await databases.listDocuments(
        DATABASE_ID,
        NEW_ARRIVAL_COLLECTION_ID,
        [Query.contains("tags", ["new-arrival"]), Query.limit(10)]
      );
      return newArrivals;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};
