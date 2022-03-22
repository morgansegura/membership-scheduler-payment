import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ nullable: true })
    public firstName: string;

    @Column({ nullable: true })
    public lastName: string;

    @Column({ unique: true, nullable: true })
    public email?: string;

    @OneToOne(() => User, (user: User) => user.profile)
    public user: User;
}
