import { LoaderFunctionArgs, json, useSearchParams } from "react-router-dom";

export async function Loader({ request }: LoaderFunctionArgs) {
  return json({ user: "user" });
}

export default function LearnAppwrite() {
  let [searchParams, setSearchParams] = useSearchParams();

  // console.log(searchParams.get("name"));

  return (
    <main className="min-h-[50vh] px-8">
      <p>Bro this is learn appwrite</p>
      <input
        className="mt-2 border border-red-600 rounded-md"
        type="text"
        onChange={(e) => setSearchParams({ search: e.target.value })}
      />
    </main>
  );
}
