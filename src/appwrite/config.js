import { Client, Account,Storage, Databases } from "appwrite";
import conf from "./env";

const client = new Client();
client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

const account = new Account(client);
const storage = new Storage(client);
const database = new Databases();
export {account,storage,database}