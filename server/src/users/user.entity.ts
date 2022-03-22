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
import { PublicFile } from 'src/files/public-file.entity';

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
        nullable: true,
    })
    @JoinColumn()
    public address?: Address;

    @OneToOne(() => Profile, {
        eager: true,
        cascade: true,
        nullable: true,
    })
    @JoinColumn()
    public profile: Profile;

    @JoinColumn()
    @OneToOne(() => PublicFile, {
        eager: true,
        nullable: true,
    })
    public avatar?: PublicFile;

    @Column({ type: 'simple-array', default: 'MEMBER' })
    public role: Role[];

    @OneToMany(() => Task, (task) => task.user, { eager: true, nullable: true })
    public tasks: Task[];

    @OneToMany(() => Post, (post) => post.author, {
        eager: true,
        nullable: true,
    })
    public posts: Post[];
}
