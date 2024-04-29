import { OAuthProvider } from "appwrite";
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

export const appwriteSignup = async (payload: any) => {
  const randomUserID = generateUserID(16);

  try {
    // check if email exists
    const promise = await account.create(
      randomUserID,
      payload.email,
      payload.password,
      payload.fullname
    );

    return promise;
  } catch (error) {
    console.log(error);
    return error;
  }
};
