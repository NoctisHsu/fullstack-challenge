import * as IPFS from 'ipfs'
import OrbitDB from 'orbit-db'
import DocumentStore from 'orbit-db-docstore'

export interface Article {
    id: String
    author: String
    title: String
    content: String
}

let orbitdb: OrbitDB;
export let articleDb: DocumentStore<Article>;

/**
 * connect Db
 */
export const connectDb = async () => {
    try {
        const ipfs = await IPFS.create({ repo: './ipfs' });
        orbitdb = await OrbitDB.createInstance(ipfs);
        articleDb = await orbitdb.docs('articles');
        await articleDb.load()
        console.info('[server/providers/db.provider] connectDb success');
    } catch (err) {
        console.error('[server/providers/db.provider] connectDb failed', err);
    }
}

/**
 * disconnect Db
 */
export const disconnectDb = async () => {
    try {
        await articleDb.close();
        await orbitdb.stop();
        console.info('[server/providers/db.provider] disconnectDb success');
    } catch (err) {
        console.error('[server/providers/db.provider] disconnectDb failed', err);
    }
}
