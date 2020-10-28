import { EntityRepository, Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './post.entity';
import { UpdatePostDto } from './dto/update-post.dto';

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {
    async createPost(
        createPostDto: CreatePostDto,
    ): Promise<Post> {
        const { title, description } = createPostDto;

        const post = new Post();
        post.title = title;
        post.description = description;
        await post.save();

        return post;
    }

    async updatePost(
      id: number,
      updatePostDto: CreatePostDto,
    ): Promise<Post> {
        const { title, description } = updatePostDto;

        const found = await this.findOne({where: {id}})
        found.title = title;
        found.description = description;
        await found.save();

        return found;
    }
}
