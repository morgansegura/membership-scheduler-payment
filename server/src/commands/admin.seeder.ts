import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { UserService } from '../user/user.service';
import { faker } from '@faker-js/faker';
import * as bcrypt from 'bcryptjs';

(async () => {
  const app = await NestFactory.createApplicationContext(AppModule);

  const userService = app.get(UserService);

  const password = await bcrypt.hash('pass1234', 12);

  for (let i = 0; i < 2; i++) {
    await userService.save({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password,
      role: 'admin',
    });
  }

  process.exit();
})();
