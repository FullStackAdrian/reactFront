import { RoleType } from "./RoleType";

export interface UserType {
    userId: number ;
    username: string;
    email: string | null;
    roles: RoleType[] | []; 
}