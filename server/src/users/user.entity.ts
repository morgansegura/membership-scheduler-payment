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
import { PublicFile } from 'src/files/publicFile.entity';
import PrivateFile from 'src/privateFiles/privateFile.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    public id?: string;

    @Column({ unique: true })
    @Expose()
    public username: string;

    @Column()
    public password: string;

    @Expose()
    @OneToOne(() => Address, {
        eager: false,
        cascade: true,
        nullable: true,
    })
    @JoinColumn()
    public address?: Address;

    @Expose()
    @OneToOne(() => Profile, {
        eager: false,
        cascade: true,
        nullable: true,
    })
    @JoinColumn()
    public profile: Profile;

    @Expose()
    @JoinColumn()
    @OneToOne(() => PublicFile, {
        eager: true,
    })
    public avatar: PublicFile;

    @OneToMany(() => PrivateFile, (file: PrivateFile) => file.owner)
    public files: PrivateFile[];

    @Column({ type: 'simple-array', default: 'MEMBER' })
    @Expose()
    public role: Role[];

    @OneToMany(() => Task, (task) => task.user, {
        eager: false,
        nullable: true,
    })
    public tasks: Task[];

    @OneToMany(() => Post, (post) => post.author, {
        eager: false,
        nullable: true,
    })
    public posts: Post[];
}
