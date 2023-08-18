import { __prod__ } from './constants';
import { Post } from './entities/Post';
import { MikroORM } from '@mikro-orm/postgresql';
import path from 'path';

export default {
    migrations: {
        path: path.join(__dirname, "./migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [Post],
    dbName: 'inquisitivedb',
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'root',
    type: 'postgresql',
    debug: !__prod__,
    allowGlobalContext: true,
} as Parameters<typeof MikroORM.init>[0];
