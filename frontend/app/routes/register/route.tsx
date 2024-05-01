import Header from "~/components/Header";
import bannerImage from "../../fascoAsset/Rectangle 19280 (1).png";
import { Button } from "~/components/ui/button";
import { Form, Link, useActionData } from "@remix-run/react";
import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@remix-run/node";
import { Input } from "~/components/ui/input";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { appwriteSignup, getUserDetails, registerSchema } from "./registerController";

export async function loader({ request }: LoaderFunctionArgs) {
  // import.meta.env.VITE_PROJECT_ENDPOINT
  const result = await getUserDetails()
  
  return json({ msg: "hello" });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const intent = await formData.get("intent");
  // if (intent === "signInWithGoogle") {
  //   return null;
  // }

  // if (intent === "signInWithGithub") {
  //   return null;
  // }

  if (intent === "signInWithPassword") {
    const submission = parseWithZod(formData, {
      schema: registerSchema,
    });
    if (submission.status !== "success") {
      return submission.reply();
    }

    const result = await appwriteSignup(submission.payload);
    // result.
    console.log(result);
    return json({ msg: "schema parsed" });
  }

  return json({ msg: "hello" });
}

export default function RegisterRoute() {
  const lastResult: any = useActionData<typeof action>();
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: registerSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

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
            <Form method="post" className="contents">
              <Button
                variant="outline"
                size="sm"
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
                size="sm"
                className="w-full"
                name="intent"
                value="signInWithGithub"
              >
                sign in with Github
              </Button>
            </Form>
          </div>

          <span className="text-center text-lg font-bold text-neutral-600">
            OR
          </span>
          <div>{fields.email.errors}</div>

          {fields.fullname.errors ? <div>{fields.fullname.errors}</div> : null}

          <div>{fields.password.errors}</div>

          <Form method="post" className="space-y-4">
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
          </Form>

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
