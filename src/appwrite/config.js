import { Client, Account,ID } from "appwrite";
import conf from "./env";

const client = new Client();
client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

const account = new Account(client);

export {account}