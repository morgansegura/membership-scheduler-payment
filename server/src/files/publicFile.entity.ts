import { Expose } from 'class-transformer';
import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PublicFile {
    @PrimaryGeneratedColumn('uuid')
    @Expose()
    public id: string;

    @Column()
    @Expose()
    public url: string;

    @Column()
    public key: string;

    @ManyToOne(() => User, (owner: User) => owner.files)
    public owner: User;
}
