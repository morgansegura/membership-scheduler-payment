import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Task } from '../tasks/task.entity';
import { Role } from '../auth/role.enum';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @Column({ type: 'simple-array', default: 'MEMBER' })
    role: Role[];

    @OneToMany(() => Task, (task) => task.user, { eager: true })
    tasks: Task[];
}
