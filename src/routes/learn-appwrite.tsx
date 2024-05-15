import { LoaderFunctionArgs, json, useSearchParams } from "react-router-dom";
import * as React from "react";

export async function Loader({ request }: LoaderFunctionArgs) {
  return json({ user: "user" });
}

export default function LearnAppwrite() {
  // const data = useLoaderData();
  const [input, setInput] = React.useState("")
  let [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get("name"));
  // console.log(searchParams.get("who"));

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log(input);
  }

  return (
    <main className="min-h-[50vh] px-8">
      <p>Bro this is learn appwrite</p>
      <form onSubmit={handleSubmit}>
        <input className="mt-2 border border-red-600 rounded-md" type="text" onChange={(e) => setInput(e.target.value)} />
      </form>
    </main>
  );
}
