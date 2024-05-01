import { ID, Models, OAuthProvider } from "appwrite";
import { account } from "~/lib/appwrite";

import { z } from "zod";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";

function generateUserID(length: number) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let userID = "";
  for (let i = 0; i < length; i++) {
    userID += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return userID;
}

export const registerSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Email is invalid"),
  fullname: z
    .string({ required_error: "Fullname is required" })
    .min(3, "Fullname is too short")
    .max(100, "Fullname is too long"),
  password: z
    .string({ required_error: "Password is required" })
    .min(10, "Password is too short")
    .max(100, "Password is too long"),
});

export const createEmailSession = async (email: string, password: string) => {
  const loggedIn = await account.createEmailPasswordSession(email, password);
  console.log(loggedIn);

  return { message: "User account and session created. get started", loggedIn };
};

export const logout = async () => {
  await account.deleteSession("current");
  return { message: "User logout successful and session deleted" };
};

export const appwriteSignup = async (
  payload: any
): Promise<
  | {
      message: string;
      promise: Models.User<Models.Preferences>;
      error?: undefined;
      emailSession: {
        message: string;
        loggedIn: Models.Session;
      };
    }
  | {
      message: string;
      promise?: undefined;
      error?: undefined;
    }
  | {
      message: string;
      error: any;
      promise?: undefined;
    }
> => {
  try {
    const promise = await account.create(
      ID.unique(),
      payload.email,
      payload.password,
      payload.fullname
    );

    // only created session if there is no issue with promise result
    const emailSession = await createEmailSession(
      payload.email,
      payload.password
    );

    // const session = await getUserDetails()

    return { message: "User created successfully", promise, emailSession };
  } catch (error: any) {
    if (error.type === "user_already_exists") {
      return {
        message:
          "User with this email already exists, please use another email",
        error: true,
      };
    }

    return { message: "an error occured", error: error.message };
  }
};

type AppwriteError = {
  code: number;
  type: string;
  response: {
    message: string;
    code: number;
    type: string;
    version: number;
  };
};

export const getUserDetails = async () => {
  try {
    const result = await account.getSession("current");
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
