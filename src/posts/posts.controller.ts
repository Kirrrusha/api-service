import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  ValidationPipe,
  ParseIntPipe,
  UsePipes,
  Body,
  Delete,
  Patch,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostEntity } from './post.entity';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  getPosts(): Promise<PostEntity[]> {
    return this.postsService.getPosts();
  }

  @Get('/:id')
  getPostById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<PostEntity> {
    return this.postsService.getPostById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createPost(
    @Body() createPostDto: CreatePostDto,
  ): Promise<PostEntity> {
    return this.postsService.createPost(createPostDto);
  }

  @Delete('/:id')
  deleteTask(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<void> {
    return this.postsService.deletePost(id);
  }

  @Patch('/:id')
  updatePost(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostDto: CreatePostDto,
  ): Promise<PostEntity> {
    return this.postsService.updatePost(id, updatePostDto);
  }
}
