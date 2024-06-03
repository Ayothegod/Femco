import { getLoggedInUser } from "@/lib/actions/authAction";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getLoggedInUser();

  if (!user) redirect("/register");

  // redirect("/account");
  return (
    <main>
      <p className="dark:text-teal-600">Hello,  bros</p>
      <p>lets build right now sef,and it should work</p>
    </main>
  );
}
