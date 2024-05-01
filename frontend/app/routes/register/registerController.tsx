import { ID, Models, OAuthProvider } from "appwrite";
import { account } from "~/lib/appwrite";

export const login = async (email: string, password: string) => {
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
    const emailSession = await login(
      payload.email,
      payload.password
    );

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
    const result = await account.get();
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
