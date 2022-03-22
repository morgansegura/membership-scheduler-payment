import { Body, Controller, Post, Req } from '@nestjs/common';
import { RequestWithUser } from 'src/auth/request-with-user.interface';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) {}

    @Post()
    async createPost(@Body() post: CreatePostDto, @Req() req: RequestWithUser) {
        return this.postsService.createPost(post, req.user);
    }
}
