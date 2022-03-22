import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { PostsRepository } from './posts.repository';

@Module({
    imports: [TypeOrmModule.forFeature([PostsRepository]), AuthModule],
    providers: [PostsService],
    controllers: [PostsController],
})
export class PostsModule {}
