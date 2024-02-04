import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

async function connect(){
    const mongd = await MongoMemoryServer.create();
    const uri = await mongd.getUri();

    await mongoose.connect(uri);

    return {
        closeDatabase: async () => {
            await mongoose.connection.dropDatabase();
            await mongoose.connection.close();

            await mongd.stop();
        },
        clearDatabase: async () => {
            const collections = mongoose.connection.collections;

            for(const key in collections){
                const collection = collections[key];
                await collection.deleteMany({});
            }
        }
    }
}

export default connect;

export type MongoHelper = {
    closeDatabase: () => Promise<void>;
    clearDatabase: () => Promise<void>;
};