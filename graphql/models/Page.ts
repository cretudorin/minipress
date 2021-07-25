import { ObjectType, Field, ID } from "type-graphql";
import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Page extends BaseEntity {

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: string

    @Field(() => String)
    @Column()
    uuid: string;

    @Field(() => String)
    @Column()
    title: string;

    @Field(() => String)
    @Column()
    slug: string;

    @Field(() => String)
    @Column()
    html: string;

    @Field(() => String)
    @Column()
    comment_id: string;

    @Field(() => String)
    @Column()
    feature_image: string;

    @Field(() => String)
    @Column()
    featured: string;

    @Field(() => String)
    @Column()
    visibility: string;

    @Field(() => String)
    @Column()
    created_at: string;

    @Field(() => String)
    @Column()
    updated_at: string;

    @Field(() => String)
    @Column()
    published_at: string;

    @Field(() => String)
    @Column()
    custom_excerpt: string;

    @Field(() => String)
    @Column()
    codeinjection_head: string;

    @Field(() => String)
    @Column()
    codeinjection_foot: string;

    @Field(() => String)
    @Column()
    custom_template: string;

    @Field(() => String)
    @Column()
    canonical_url: string;

    @Field(() => String)
    @Column()
    url: string;

    @Field(() => String)
    @Column()
    excerpt: string;

    @Field(() => String)
    @Column()
    reading_time: string;

    @Field(() => String)
    @Column()
    page: string;

    @Field(() => String)
    @Column()
    access: string;

    @Field(() => String)
    @Column()
    og_image: string;

    @Field(() => String)
    @Column()
    og_title: string;

    @Field(() => String)
    @Column()
    og_description: string;

    @Field(() => String)
    @Column()
    twitter_image: string;

    @Field(() => String)
    @Column()
    twitter_title: string;

    @Field(() => String)
    @Column()
    twitter_description: string;

    @Field(() => String)
    @Column()
    meta_title: string;

    @Field(() => String)
    @Column()
    meta_description: string;
}