import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { FilesModule } from 'src/files/files.module';
import { Address } from './address.entity';
import { Profile } from './profile.entity';
import { UsersController } from './users.controller';
import { PrivateFilesModule } from 'src/privateFiles/privateFiles.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([UsersRepository, Address, Profile]),
        FilesModule,
        PrivateFilesModule,
    ],
    controllers: [UsersController],
    providers: [UsersService, FilesModule, PrivateFilesModule],
    exports: [UsersService],
})
export class UsersModule {}
