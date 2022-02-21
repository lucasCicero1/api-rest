import { createConnection } from "typeorm";

export const connectServerOnDb = async () => {
    const connection = await createConnection();
    console.log(`App connected on DB ${connection.options.database}`);

    process.on('SIGINT', () => {
        connection.close().then(() => console.log('connection closed'));
    });
};