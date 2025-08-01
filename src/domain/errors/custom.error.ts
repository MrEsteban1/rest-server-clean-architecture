import { HttpStatusCode } from "../enum/httpStatus.enum"

export class CustomError extends Error {
    
    constructor (
        public readonly code:number, 
        public readonly message:string){
        super(message)
    }

    static errorResponse(httpStatusCode: HttpStatusCode, message:string){
        return new CustomError(httpStatusCode, message)
    }

    static internalServerError(){
        return new CustomError(HttpStatusCode.InternalServerError,"Error interno en el servidor.")
    }
}