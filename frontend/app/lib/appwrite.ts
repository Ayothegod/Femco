import { Client, Account, Databases } from "appwrite";
const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6624e6c59fa50e4ba0c3")
  // .setEndpoint(import.meta.env.PROJECT_ENDPOINT)
  // .setProject(import.meta.env.PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client)