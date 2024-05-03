import { ID, Models, OAuthProvider } from "appwrite";
import { account, databases } from "../lib/appwrite";
import { loginSchema } from "../lib/schema";

export const login = async (email: string, password: string) => {
  const data = loginSchema.parse({ email, password });
  const loggedIn = await account.createEmailPasswordSession(
    data.email,
    data.password
  );
  console.log(loggedIn);
  return { message: "User account and session created. get started", loggedIn };
};

export const register = async (payload: any) => {
  try {
    const promise = await account.create(
      ID.unique(),
      payload.email,
      payload.password,
      payload.fullname
    );

    const emailSession = await login(payload.email, payload.password);

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

export const getUserDetails = async () => {
  try {
    const result = await account.get();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const logout = async () => {
  try {
    await account.deleteSession("current");
    return { message: "User logout successful and session deleted" };
  } catch (error: any) {
    return { message: "an error occured", error: error.message };
  }
};

// : Promise<
//   | {
//       message: string;
//       promise: Models.User<Models.Preferences>;
//       error?: undefined;
//       emailSession: {
//         message: string;
//         loggedIn: Models.Session;
//       };
//     }
//   | {
//       message: string;
//       promise?: undefined;
//       error?: undefined;
//     }
//   | {
//       message: string;
//       error: any;
//       promise?: undefined;
//     }
// >
