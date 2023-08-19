import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';

import microConfig from './mikro-orm.config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/hello';

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up()
    const app = express();
    const apolloServer = new ApolloServer({
         schema: await buildSchema({
            resolvers:[HelloResolver],
            validate: false,
         })
    });

    await apolloServer.start();    
    apolloServer.applyMiddleware({ app });

    app.listen(4000, () => {
        console.log(`Server is running on localhost: 4000`);
    });
    
    //const post = orm.em.create(Post, {title : 'my first post', createdAt: '2023-08-18T14:40:32.823Z', updatedAt: '2023-08-18T14:40:32.823Z'});
    //await orm.em.persistAndFlush(post);
    //const posts = await orm.em.find(Post, {});
    //console.log(posts);
}

main().catch(error => {
    console.log(error);
});



console.log("Hello There");