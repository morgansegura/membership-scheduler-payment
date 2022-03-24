import { Category } from 'src/categories/category.entity';
import { User } from 'src/users/user.entity';
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Post {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column()
    public title: string;

    @Column()
    public content: string;

    @Column({ nullable: true })
    public category?: string;

    @ManyToOne(() => User, (author: User) => author.posts, { eager: false })
    public author: User;

    @ManyToMany(() => Category)
    @JoinTable()
    public categories: Category[];
}
