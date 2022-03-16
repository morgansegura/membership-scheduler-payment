import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { Repository } from 'typeorm';
import { User } from './user';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private cloudinary: CloudinaryService,
  ) {}

  async save(options) {
    return this.userRepository.save(options);
  }

  async find(options) {
    return this.userRepository.find(options);
  }

  async findOne(options) {
    return this.userRepository.findOne(options);
  }

  async update(id: number, options) {
    return this.userRepository.findOne(id, options);
  }

  async uploadImageToCloudinary(file: Express.Multer.File) {
    return await this.cloudinary.uploadImage(file).catch(() => {
      console.log(file);
      // throw new BadRequestException('Invalid file type.');
    });
  }
}
