import { Client, Account, Databases, Storage, ID, Query } from 'appwrite';

const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!;
const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!;
export const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
export const collectionId = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!;
export const bucketId = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!;

const client = new Client()
    .setEndpoint(endpoint)
    .setProject(projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

export { ID, Query };
