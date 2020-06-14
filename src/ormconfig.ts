import { ConnectionOptions } from 'typeorm';

import { DATABASE_URI } from './config';
import { KeyValueEntity, SignedOrderEntity, TransactionEntity } from './entities';

const entities = [SignedOrderEntity, TransactionEntity, KeyValueEntity];

export const config: ConnectionOptions = {
    type: 'mysql',
    url: DATABASE_URI,
    entities,
    synchronize: true,
    logging: true,
    logger: 'debug',
    extra: {
        connectionLimit: 50,
    },
};
