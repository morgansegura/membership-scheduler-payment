import {
    Column,
    Entity,
    JoinColumn,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Task } from '../tasks/task.entity';
import { Role } from '../auth/role.enum';
import { Expose } from 'class-transformer';
import { Address } from './address.entity';
import { Profile } from './profile.entity';
import { Post } from 'src/posts/post.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    public id?: string;

    @Column({ unique: true })
    @Expose()
    public username: string;

    @Column()
    public password: string;

    @OneToOne(() => Address, {
        eager: true,
        cascade: true,
    })
    @JoinColumn()
    public address: Address;

    @OneToOne(() => Profile, {
        eager: true,
        cascade: true,
    })
    @JoinColumn()
    public profile: Profile;

    @Column({ type: 'simple-array', default: 'MEMBER' })
    public role: Role[];

    @OneToMany(() => Task, (task) => task.user, { eager: true })
    public tasks: Task[];

    @OneToMany(() => Post, (post) => post.author, { eager: true })
    public posts: Post[];
}
