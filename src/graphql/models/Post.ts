import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
export class Post extends BaseEntity {

    @Field(() => String)
    @Column()
    slug: string;

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: string;

    @Field(() => String)
    @Column()
    uuid: string;

    @Field(() => String)
    @Column()
    author: string;

    @Field(() => String)
    @Column()
    title: string;

    @Field(() => String)
    @Column()
    html: string;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    comment_id?: string;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    feature_image?: string;

    @Field(() => Boolean)
    @Column()
    featured: boolean = false;

    @Field(() => String)
    @Column()
    visibility: string = "public";

    @Field(() => Number)
    @Column()
    created_at: number;

    @Field(() => Number, { nullable: true })
    @Column({ nullable: true })
    updated_at?: number;

    @Field(() => Number, { nullable: true })
    @Column({ nullable: true })
    published_at?: number;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    custom_excerpt?: string;

    @Field(() => String)
    @Column()
    url: string;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    excerpt?: string;

    @Field(() => Number, { nullable: true })
    @Column({ nullable: true })
    reading_time?: number;

    @Field(() => Boolean, { nullable: true })
    @Column({ nullable: true })
    access?: boolean;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    og_image?: string;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    og_title?: string;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    og_description?: string;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    twitter_title?: string;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    twitter_image?: string;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    twitter_description?: string;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    meta_title?: string;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    meta_description?: string;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    email_subject?: string;
}
