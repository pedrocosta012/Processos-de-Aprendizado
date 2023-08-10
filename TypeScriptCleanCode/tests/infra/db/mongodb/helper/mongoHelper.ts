import { Collection, MongoClient } from 'mongodb';

class MongoHelper {
    private client: MongoClient

    async connect(urlConnection: string): Promise<void> {
        console.log('urlConnection', urlConnection);
        this.client = await MongoClient.connect(urlConnection);
    }

    async disconnect(): Promise<void> {
        if (this.client.db().databaseName.includes('jest')) {
            await this.client.db().dropDatabase();
        }
        await this.client.close();
    }

    getCollection(collectionName: string): Collection {
        return this.client.db().collection(collectionName);
    }

    map(collection: any): any {
        const { _id, ...accountWithoutId } = collection;
        return Object.assign({}, accountWithoutId, { id: _id });
    }
}

export const mongoHelper = new MongoHelper();
