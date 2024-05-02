import { Button } from "../components/ui/button";
import bannerImage from "../fascoAsset/Rectangle 19280.png";
import { Link } from "react-router-dom";

export default function LoginRoute() {
  return (
    <main className="pageStyle flex items-center justify-center">
      <div className="flex w-full sm:max-w-sm md:max-w-2xl border rounded-md overflow-hidden">
        <div className="md:max-w-[50%] hidden md:block">
          <img src={bannerImage} alt="banner-image" />
        </div>
        <div className="w-full md:w-[50%] flex flex-col items-center justify-center px-8 py-10">
          <h2 className="text-lg font-serif font-bold tracking-wide">
            Sign In To FASCO
          </h2>

          <div className="mt-10 flex flex-col items-center justify-center w-full gap-4">
            <form method="post" className="contents">
              <Button
                variant="outline"
                className="w-full "
                name="intent"
                value="signInWithGoogle"
              >
                sign in with Google
              </Button>
            </form>

            <form method="post" className="contents">
              <Button
                variant="default"
                className="w-full"
                name="intent"
                value="signInWithGithub"
              >
                sign in with Github
              </Button>
            </form>
          </div>
          <Link
            to="/"
            className="mt-10 md:mt-auto text-xs text-blue-500 hover:text-blue-600 font-light "
          >
            Terms and Conditions
          </Link>
        </div>
      </div>
    </main>
  );
}
