import { CreatePostInput } from "../inputs/CreatePostInput";
import { UpdatePostInput } from "../inputs/UpdatePostInput";
import { Post } from "../models/Post";
import { Resolver, Query, Mutation, Arg } from "type-graphql";

@Resolver(Post)
export class PostResolver {
    @Query(() => [Post])
    posts() {
        return Post.find();
    }

    @Query(() => Post)
    async post(@Arg("id") id: string) {
        let post = await Post.findOne({ where: { id } });

        if (!post) throw new Error("Post not found!");
        return post
    }

    @Mutation(() => Post)
    async createPost(@Arg("data") data: CreatePostInput) {
        const post = Post.create(data);
        await post.save();
        return post;
    }

    @Mutation(() => Post)
    async updatePost(@Arg("id") id: string, @Arg("data") data: UpdatePostInput) {
        const post = await Post.findOne({ where: { id } });
        if (!post) throw new Error("Post not found!");
        Object.assign(post, data);
        await post.save();
        return post;
    }

    @Mutation(() => Boolean)
    async deletePost(@Arg("id") id: string) {
        const post = await Post.findOne({ where: { id } });
        if (!post) throw new Error("Post not found!");
        await post.remove();
        return true;
    }
}
