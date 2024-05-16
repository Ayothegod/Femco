import {
  useSearchParams,
  useParams,
  Form,
  ActionFunctionArgs,
  redirect,
} from "react-router-dom";
import { Button } from "../components/ui/button";

export async function Action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const search = await formData.get("search");
  console.log(search);
  
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  
  // Set the desired search parameter
  searchParams.set("age", "0");
  console.log("set");

  // Construct the new URL with the updated search parameters
  url.search = searchParams.toString();

  return redirect(url.toString())
}

export const Query = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);

  const handleClick = () => {
    const currentSearchParams = new URLSearchParams(searchParams);
    currentSearchParams.set("age", "7530");
    setSearchParams(currentSearchParams);
  };

  const handleSearch = (e: any) => {
    const currentSearchParams = new URLSearchParams(searchParams);
    currentSearchParams.set("search", e.target.value);
    setSearchParams(currentSearchParams);
  };

  const handleChange = (event: any) => {
    const search = event.target.value;
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set("search", search);
      return newParams;
    });
  };

  return (
    <div className="min-h-[50vh]">
      <Form method="post">
        <input
          type="text"
          name="search"
          placeholder="Set URL parameter"
          // onChange={handleSearch}
        />
      </Form>

      <Button onClick={handleClick}>Set Age</Button>
    </div>
  );
};
