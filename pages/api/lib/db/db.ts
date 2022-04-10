import * as TypeORM from 'typeorm';

import { User } from '../features/user';

let databaseConnection: TypeORM.Connection;

export const createConnection = async (): Promise<TypeORM.Connection> => {
    if (databaseConnection) {
        return databaseConnection;
    }
    // create TypeORM connection
    try {
        databaseConnection = await TypeORM.createConnection({
            type: 'sqlite',
            database: process.env.DATABASE_URL!!,
        });
    } catch (e) {
        console.error(
            'Could not create a connection with the database, check settings!',
            e
        );
        throw e;
    }
    if (!databaseConnection) {
        throw new Error('database connection still does not exist!');
    }
    return databaseConnection;
};
