import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { FilesModule } from 'src/files/files.module';
import { Address } from './address.entity';
import { Profile } from './profile.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([UsersRepository, Address, Profile]),
        FilesModule,
    ],
    providers: [UsersService, FilesModule],
    exports: [UsersService],
})
export class UsersModule {}
