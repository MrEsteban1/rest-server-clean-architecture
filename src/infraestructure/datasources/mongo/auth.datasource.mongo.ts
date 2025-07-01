import { AuthDatasource } from "../../../domain/datasources/auth.datasource";
import { RegisterUserDto } from "../../../domain/dtos/register-user.dto";
import { UserEntity } from "../../../domain/entities/user.entity";
import { CustomError } from "../../../domain/errors/custom.error";

export class AuthDatasourceMongo implements AuthDatasource{
    async register(registerUserDto: RegisterUserDto):Promise<UserEntity>{
        const {name,email,password} = registerUserDto

        try {
            

            return new UserEntity('1', name, email, password,"Admin")
        } catch (error) {
         if(error instanceof CustomError)
            throw error

         throw CustomError.internalServerError()
        }
    }
    
}