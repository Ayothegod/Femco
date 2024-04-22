import Header from "~/components/Header";
import bannerImage from "../../fascoAsset/Rectangle 19280.png";
import { Button } from "~/components/ui/button";
import { Youtube } from "lucide-react";
import { Link } from "@remix-run/react";

export default function LoginRoute() {
  return (
    <main className="pageStyle flex items-center justify-center mt-10">
      <div className="flex max-w-2xl border rounded-md overflow-hidden">
        <div className="max-w-[50%] hidden md:block">
          <img src={bannerImage} alt="banner-image" />
        </div>
        <div className="md:w-[50%] flex flex-col items-center justify-center px-8 py-10">
          <h2 className="text-lg font-serif font-bold tracking-wide">
            Sign In To FASCO
          </h2>

          <div className="mt-10 flex flex-col items-center justify-center w-full gap-4">
            <Button variant="outline" className="w-full md:w-fit">
              sign in with Google
            </Button>
            <Button variant="default" className="w-full md:w-fit">
              sign in with Github
            </Button>
          </div>
          <Link
            to="/"
            className="mt-4 md:mt-auto text-xs text-blue-500 hover:text-blue-600 font-light "
          >
            Terms and Conditions
          </Link>
        </div>
      </div>
    </main>
  );
}
