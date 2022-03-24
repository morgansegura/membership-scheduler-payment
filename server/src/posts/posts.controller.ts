import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { RequestWithUser } from 'src/auth/requestWithUser.interface';
import { CreatePostDto } from './dto/createPost.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) {}

    @Post()
    async createPost(@Body() post: CreatePostDto, @Req() req: RequestWithUser) {
        return this.postsService.createPost(post, req.user);
    }
}
