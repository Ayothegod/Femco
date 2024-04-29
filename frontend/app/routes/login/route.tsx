import Header from "~/components/Header";
import bannerImage from "../../fascoAsset/Rectangle 19280.png";
import { Button } from "~/components/ui/button";
import { Form, Link } from "@remix-run/react";
import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@remix-run/node";
import { appwriteSignup } from "./loginController";

export async function loader({ request }: LoaderFunctionArgs) {
  
  return json({ msg: "hello" });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const intent = await formData.get("intent");
  // import.meta.env.VITE_PROJECT_ENDPOINT
  
  if (intent === "signInWithGoogle") {
    const result = await appwriteSignup()
    console.log(result);
    return null
  }

  if (intent === "signInWithGithub") {
    console.log("Hello googlers");
    
    return null
  }
  return json({ msg: "hello" });
}

export default function LoginRoute() {
  return (
    <main className="pageStyle flex items-center justify-center">
      <div className="flex w-full sm:max-w-sm md:max-w-2xl border rounded-md overflow-hidden">
        {/* <p className="hidden sm:block">Hello</p> */}
        <div className="md:max-w-[50%] hidden md:block">
          <img src={bannerImage} alt="banner-image" />
        </div>
        <div className="w-full md:w-[50%] flex flex-col items-center justify-center px-8 py-10">
          <h2 className="text-lg font-serif font-bold tracking-wide">
            Sign In To FASCO
          </h2>

          <div className="mt-10 flex flex-col items-center justify-center w-full gap-4">
            <Form method="post" className="contents">
              <Button
                variant="outline"
                className="w-full "
                name="intent"
                value="signInWithGoogle"
              >
                sign in with Google
              </Button>
            </Form>

            <Form method="post" className="contents">
              <Button
                variant="default"
                className="w-full"
                name="intent"
                value="signInWithGithub"
              >
                sign in with Github
              </Button>
            </Form>
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
