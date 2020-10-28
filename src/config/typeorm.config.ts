import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'blog_db',
    port: 5432,
    username: 'root',
    password: 'root',
    database: 'blog_db',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
};
