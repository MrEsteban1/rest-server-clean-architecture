import express from 'express'
import { AppRoutes } from './routes'

interface Options {
    port?: number
}

export class Server {
    public readonly app = express()
    private readonly port: number
    
    constructor(options: Options){
        const { port = 3000 } = options

        this.port = port
    }

    
    
    async start(){
        // Middlewares
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:true}))

        // routes
        this.app.use(AppRoutes.routes)
        
        this.app.listen(this.port, ()=>{
            console.log(`Servidor escuchando el puerto: ${this.port}`)
        })
    }
}