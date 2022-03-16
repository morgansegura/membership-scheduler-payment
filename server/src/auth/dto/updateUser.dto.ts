import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  firstName?: string;

  @IsNotEmpty()
  lastName?: string;

  @IsNotEmpty()
  @IsEmail()
  email?: string;

  // avatar?: string;

  // @IsNotEmpty()
  // password?: string;

  // @IsNotEmpty()
  // passwordConfirm?: string;
}
