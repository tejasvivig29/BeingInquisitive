import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import { Post } from './entities/Post';
import microConfig from './mikro-orm.config';

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up()
    const post = orm.em.create(Post, {title : 'my first post', createdAt: '2023-08-18T14:40:32.823Z', updatedAt: '2023-08-18T14:40:32.823Z'});
    await orm.em.persistAndFlush(post);
    console.log("-------sql2------");
    await orm.em.nativeInsert(Post, {title : 'my first post', createdAt: '2023-08-18T14:40:32.823Z', updatedAt: '2023-08-18T14:40:32.823Z'});
}

main().catch(error => {
    console.log(error);
});



console.log("Hello There");