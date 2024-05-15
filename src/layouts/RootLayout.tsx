import { LoaderFunctionArgs, Outlet, json, useLoaderData } from "react-router-dom";
import Footer from "../components/build/Footer";
import Header from "../components/build/Header";
import { getUserDetails } from "../services/authAction";

export async function Loader({ request }: LoaderFunctionArgs) {
  const user = await getUserDetails();
  if (!user) {
    return json(null);
  }
  return json({ user: user});
}

export default function RootLayout({ children }: any) {
  const user = useLoaderData()
  
  return (
    <main className=" font-inter">
      <Header user={user} />
      {/* {children} */}
      <Outlet />
      <Footer />
    </main>
  );
}