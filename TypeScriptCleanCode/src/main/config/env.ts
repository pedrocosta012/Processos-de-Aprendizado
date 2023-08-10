import 'dotenv/config';

const mongoDefaultConnection = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`;

export default {
    mongoUrlConnection: `${mongoDefaultConnection}/${process.env.MONGO_DATABASE}`,
    mongoUrlConnectionTest: `${mongoDefaultConnection}/jest-${process.env.MONGO_DATABASE}`
};
