import { IUser } from "./user";

export interface IUserResponse{
    jwt: string,
    user: IUser
}