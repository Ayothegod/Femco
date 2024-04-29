import { OAuthProvider } from "appwrite";
import { account } from "~/lib/appwrite";

export const appwriteSignup = async () => {
  const promise = account.create(
    "jhjhs7sjsjky7quiuq",
    "email@example.com",
    "ghdjhjhd778d8"
  );

  promise.then(
    function (response) {
      console.log(response); // Success
    },
    function (error) {
      console.log(error); // Failure
    }
  );

  return promise;
};

// export const oauthGoogleLogin = async () => {
// //   const createSession = await account.createOAuth2Session(
// //     OAuthProvider.Google,
// //     "/",
// //     "/logout"
// //     // ['repo', 'user'] as any
// //   );

//   return createSession;
// };
