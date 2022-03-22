import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostNotFoundException } from './exception/post-not-found.exceptions';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(PostsRepository)
        private readonly postsRepository: PostsRepository,
    ) {}

    async createPost(post: CreatePostDto, user: User) {
        const newPost = await this.postsRepository.create({
            ...post,
            author: user,
        });
        await this.postsRepository.save(newPost);
        return newPost;
    }

    getAllPosts() {
        return this.postsRepository.find({ relations: ['author'] });
    }

    async getPostById(id: string) {
        const post = await this.postsRepository.findOne(id, {
            relations: ['author'],
        });
        if (post) {
            return post;
        }
        throw new PostNotFoundException(id);
    }

    async updatePost(id: string, post: UpdatePostDto) {
        await this.postsRepository.update(id, post);
        const updatedPost = await this.postsRepository.findOne(id, {
            relations: ['author'],
        });
        if (updatedPost) {
            return updatedPost;
        }
        throw new PostNotFoundException(id);
    }
}
