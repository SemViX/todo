export interface ITask{
    documentId: string,
    title: string,
    text: any,
    deadline: string,
    is_completed: boolean,
    photo: {
        url: string
    }
}

export interface ITasks {
    data: ITask[]
}

export interface IInputTask{
    title: string,
    text: string,
    deadline: string,
    user: any
}

export interface IUserInput{
    username: string,
    email: string,
    password: string
}

export interface IError{
    response:{
        data:{
            error:{
                message:string
            }
        }
    }
}

export interface User{
    id: string,
    username: string,
    email: string
}

export interface UserResponse{
    jwt: string,
    user: User
}

export interface ISingInInput{
    email: string, 
    password: string
}

