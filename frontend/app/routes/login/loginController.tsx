import { OAuthProvider } from "appwrite";
import { account } from "~/lib/appwrite";


export const oauthGoogleLogin = async() => {
    const createSession = await account.createOAuth2Session(
        OAuthProvider.Google,
        '/',
        '/logout', 
        // ['repo', 'user'] // scopes (optional)
    );
    return createSession
}