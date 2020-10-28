import { Injectable, NotFoundException } from '@nestjs/common';
import { PostRepository } from './posts.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostRepository)
    private postRepository: PostRepository,
  ) {
  }

  async getPosts(): Promise<Post[]> {
    return this.postRepository.find()
  }

  async getPostById(
    id: number,
  ): Promise<Post> {
    const found = await this.postRepository.findOne({where: {id}});

    if (!found) {
      throw new NotFoundException(`Post with ID "${id}" not found`);
    }

    return found;
  }

  async createPost(
    createTaskDto: CreatePostDto,
  ): Promise<Post> {
    return this.postRepository.createPost(createTaskDto);
  }

  async deletePost(
    id: number,
  ): Promise<void> {
    const result = await this.postRepository.delete({id});

    if (result.affected === 0) {
      throw new NotFoundException(`Post with ID "${id}" not found`);
    }
  }

  async updatePost(
    id: number,
    updatePostDto: CreatePostDto,
  ): Promise<Post> {
    return this.postRepository.updatePost(id, updatePostDto)
  }
}
