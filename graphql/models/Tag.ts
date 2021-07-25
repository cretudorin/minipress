import { ObjectType, Field, ID } from "type-graphql";
import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Tags extends BaseEntity {

    @Field(() => String)
    @Column()
    slug: string;

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: string;

    @Field(() => String)
    @Column()
    name: string;

    @Field(() => String)
    @Column()
    description: string;

    @Field(() => String)
    @Column()
    feature_image: string;

    @Field(() => String)
    @Column()
    visibility: string;

    @Field(() => String)
    @Column()
    meta_title: string;

    @Field(() => String)
    @Column()
    meta_description: string;

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
    codeinjection_head: string;

    @Field(() => String)
    @Column()
    codeinjection_foot: string;

    @Field(() => String)
    @Column()
    canonical_url: string;

    @Field(() => String)
    @Column()
    accent_color: string;

    @Field(() => String)
    @Column()
    url: string;
}