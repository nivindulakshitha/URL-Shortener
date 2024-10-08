import { MongoClient } from 'mongodb';
import { nanoid } from 'nanoid';
import dotenv from 'dotenv';
dotenv.config()

export const getDb = async () => { 

    if (!process.env.db_uri) {
        throw new Error("Database URL is not defined in environment variables");
    }

    const client = new MongoClient(process.env.db_uri);
    await client.connect();
    return client.db();
}

export const generateShortCode = async () => {
    return nanoid(6);
}

export const shortCodeExists = async (shortCode: string) => {
    const db = await getDb();
    const url = await db.collection('urls').findOne({ shortCode });
    return !!url;
}

export const saveUrl = async (longUrl: string) => {
    const db = await getDb();
    let shortCode = await generateShortCode();
    while (true) {
        if (!await shortCodeExists(shortCode)) {
            break;
        }
        shortCode = await generateShortCode();
    }
    await db.collection('urls').insertOne({ longUrl, shortCode });
}

export const getUrlByShortCode = async (shortCode: string) => {
    const db = await getDb();
    return await db.collection('urls').findOne({ shortCode });
}

export const getUrlByLongUrl = async (longUrl: string) => {
    const db = await getDb();
    return await db.collection('urls').findOne({ longUrl });
}

