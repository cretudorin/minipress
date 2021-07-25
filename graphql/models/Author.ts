import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
@Entity()
@ObjectType()
export class Author extends BaseEntity {

    @Field(() => String)
    @Column()
    slug: string;

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: string;

    @Field(() => String)
    @Column()
    name: string

    @Field(() => String)
    @Column()
    profile_image: string

    @Field(() => String)
    @Column()
    cover_image: string

    @Field(() => String)
    @Column()
    bio: string

    @Field(() => String)
    @Column()
    website: string

    @Field(() => String)
    @Column()
    location: string

    @Field(() => String)
    @Column()
    facebook: string

    @Field(() => String)
    @Column()
    twitter: string

    @Field(() => String)
    @Column()
    meta_title: string

    @Field(() => String)
    @Column()
    meta_description: string

    @Field(() => String)
    @Column()
    url: string
}