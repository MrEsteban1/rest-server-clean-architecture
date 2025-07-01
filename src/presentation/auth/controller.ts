import { Request, Response } from "express"
import { RegisterUserDto } from "../../domain/dtos/register-user.dto"
import { AuthRepository } from "../../domain"

export class AuthController {

    constructor(
        private readonly authRepository: AuthRepository
    ){}

    registerUser = (req: Request, res: Response) => {
        const [error, registerUserDto] = RegisterUserDto.create(req.body || {})

        if(error) {
            res.status(400).json({error:error})
            return
        }

        this.authRepository.register(registerUserDto!) //puede ser nulo por eso el !
        .then(user => res.json(user))
        .catch(error => res.status(500))
        res.json(registerUserDto)  
    }

    loginUser = (req:Request,res:Response)=>{
        res.json('Login User!')
    }
}