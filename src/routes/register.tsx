import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Link } from "react-router-dom";
import bannerImage from "../fascoAsset/Rectangle 19280 (1).png";

export default function RegisterRoute() {
  //   const lastResult: any = useActionData<typeof action>();
  //   const [form, fields] = useForm({
  //     lastResult,
  //     onValidate({ formData }) {
  //       return parseWithZod(formData, { schema: registerSchema });
  //     },
  //     shouldValidate: "onBlur",
  //     shouldRevalidate: "onInput",
  //   });

  return (
    <main className="pageStyle flex items-center justify-center">
      <div className="flex w-full sm:max-w-sm md:max-w-3xl border rounded-md overflow-hidden">
        <div className="md:max-w-[50%] hidden md:block">
          <img
            src={bannerImage}
            alt="banner-image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full md:w-[50%] flex flex-col justify-center px-8 py-4 space-y-4">
          <h2 className="text-lg font-serif font-bold tracking-wide">
            Create Account
          </h2>

          <div className="mt-2 flex flex-col md:flex-row items-center justify-center w-full gap-2">
            <form method="post" className="contents">
              <Button
                variant="outline"
                size="sm"
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
                size="sm"
                className="w-full"
                name="intent"
                value="signInWithGithub"
              >
                sign in with Github
              </Button>
            </form>
          </div>

          <span className="text-center text-lg font-bold text-neutral-600">
            OR
          </span>
          {/* <div>{fields.email.errors}</div>
          {fields.fullname.errors ? <div>{fields.fullname.errors}</div> : null}
          <div>{fields.password.errors}</div> */}

          <form method="post" className="space-y-4">
            <Input placeholder="Full Name" name="fullname" />
            <Input placeholder="Email Address" name="email" />
            <Input placeholder="Password" name="password" />

            <Button
              name="intent"
              value="signInWithPassword"
              className="w-full"
              size="sm"
            >
              Create Account
            </Button>
          </form>

          <Link
            to="/"
            className="mt-10 md:mt-auto text-xs text-blue-500 hover:text-blue-600 font-light text-right"
          >
            Fasco Terms and Conditions
          </Link>
        </div>
      </div>
    </main>
  );
}
