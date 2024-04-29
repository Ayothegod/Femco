import { Client, Account } from "appwrite";
const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6624e6c59fa50e4ba0c3");

export const account = new Account(client);

// .setEndpoint(import.meta.env.PROJECT_ENDPOINT)
// .setProject(import.meta.env.PROJECT_ID);
