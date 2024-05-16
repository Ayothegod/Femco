import { LoaderFunctionArgs, Outlet, defer, json, useLoaderData } from "react-router-dom";
import Footer from "../components/build/Footer";
import Header from "../components/build/Header";
import { getUserDetails } from "../services/authAction";

export async function Loader({ request }: LoaderFunctionArgs) {
  const user = getUserDetails();
  if (!user) {
    return json({user: null});
  }
  return defer({ user: user})
}

export default function RootLayout({ children }: any) {
  const user: any = useLoaderData()
  
  return (
    <main className=" font-inter">
      <Header user={user.user} />
      <Outlet />
      <Footer />
    </main>
  );
}
