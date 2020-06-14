import { ConnectionOptions } from 'typeorm';

import { DATABASE_URI, DATABASE_NAME } from './config';
import { KeyValueEntity, SignedOrderEntity, TransactionEntity } from './entities';

const entities = [SignedOrderEntity, TransactionEntity, KeyValueEntity];

export const config: ConnectionOptions = {
    type: 'mysql',
    url: DATABASE_URI,
    database: DATABASE_NAME,
    entities,
    synchronize: false,
    logging: true,
    logger: 'debug',
    extra: {
        connectionLimit: 50,
    },
};
