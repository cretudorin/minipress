import { InputType, Field } from "type-graphql";

@InputType()
export class CreatePostInput {

    @Field(type => String)
    slug: string;
    
    @Field(type => String)
    uuid: string;

    @Field(type => String)
    author: string;

    @Field(type => String)
    title: string;

    @Field(type => String)
    html: string;

    @Field(type => String, { nullable: true })
    comment_id?: string;

    @Field(type => String, { nullable: true })
    feature_image?: string;

    @Field(type => Boolean)
    featured: boolean = false;

    @Field(type => String)
    visibility: string = "public";

    @Field(type => Number)
    created_at: number;

    @Field(type => Number, { nullable: true })
    updated_at?: number;

    @Field(type => Number, { nullable: true })
    published_at?: number;

    @Field(type => String, { nullable: true })
    custom_excerpt?: string;

    @Field(type => String)
    url: string;

    @Field(type => String, { nullable: true })
    excerpt?: string;

    @Field(type => Number, { nullable: true })
    reading_time?: number;

    @Field(type => Boolean, { nullable: true })
    access?: boolean;

    @Field(type => String, { nullable: true })
    og_image?: string;

    @Field(type => String, { nullable: true })
    og_title?: string;

    @Field(type => String, { nullable: true })
    og_description?: string;

    @Field(type => String, { nullable: true })
    twitter_title?: string;

    @Field(type => String, { nullable: true })
    twitter_image?: string;

    @Field(type => String, { nullable: true })
    twitter_description?: string;

    @Field(type => String, { nullable: true })
    meta_title?: string;

    @Field(type => String, { nullable: true })
    meta_description?: string;

    @Field(type => String, { nullable: true })
    email_subject?: string;
}
