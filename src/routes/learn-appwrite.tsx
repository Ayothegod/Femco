import { LoaderFunctionArgs, json, useLoaderData } from "react-router-dom";
import { getNewArrivals } from "../services/dbAction";

export async function Loader({ request }: LoaderFunctionArgs) {
  const {maleResult, femaleResult}: any = await getNewArrivals("short","female");
  console.log(maleResult, femaleResult);

  return json({ user: "user" });
}

export default function LearnAppwrite() {
  const data = useLoaderData();
  return (
    <div>
      <p>Bro this is learn appwrite</p>
    </div>
  );
}
