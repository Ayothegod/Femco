import { createAdminClient, getLoggedInUser } from "@/lib/actions/authAction";
import { redirect } from "next/navigation";

import { ID } from "node-appwrite";
import { cookies } from "next/headers";

async function signUpWithEmail(formData: FormData) {
    "use server";

    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");

    const { account } = await createAdminClient();

    await account.create(ID.unique(), email, password, name);
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("my-custom-session", session.secret, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: true,
    });

    redirect("/account");
}


export default async function SignUpPage() {
    const user = await getLoggedInUser();
    if (user) redirect("/account");

    return (
        <>
            <form action={signUpWithEmail}>
                <input
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                />
                <input
                    id="password"
                    name="password"
                    placeholder="Password"
                    minLength={8}
                    type="password"
                />
                <input
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                />
                <button type="submit">Sign up</button>
            </form>
        </>
    );
}

