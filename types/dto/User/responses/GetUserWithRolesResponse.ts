import { RoleType } from "../../../entities/RoleType";

export interface GetUserWithRolesResponse {
    
    userId: number;
    username: string;
    email: string | null;
    roles: RoleType[] ;    

}