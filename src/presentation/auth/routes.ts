import { Router } from "express";
import { AuthController } from "./controller";
import { AuthDatasourceMongo } from "../../infraestructure";
import { AuthRepositoryImpl } from "../../infraestructure/repositories/auth.repository.impl";

export class AuthRoutes {
    
    static get routes(): Router {
        
        const router = Router()

        const datasource = new AuthDatasourceMongo()
        const AuthRepository = new AuthRepositoryImpl(datasource)
        const controller = new AuthController(AuthRepository)

        router.post('/register', controller.registerUser)
        router.post('/login', controller.loginUser)

        return router
    }
}