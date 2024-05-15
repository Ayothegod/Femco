import { LoaderFunctionArgs, json } from "react-router-dom";
import client from "../sanity/client";

export async function Loader({ request }: LoaderFunctionArgs) {
  // const data = await client.fetch(`*[_type == "event"]`)
//  {
//   title,
//   slug,
//   body,
//   publishedAt,
//   mainImage {
//     asset -> {
//       _id,
//       url
//     },
//     alt,
//   }
// } | order(publishedAt desc)
  // console.log(data);
  return json({ user: "user" });
}

export default function LearnAppwrite() {
  // const data = useLoaderData();
  return (
    <main className="min-h-[50vh]">
      <p>Bro this is learn appwrite</p>
    </main>
  );
}
