// import { RoleContextType } from "./RoleContextType";
export interface UserContextType {
    
    username: string | null;
    setUsername: (username: string | null) => void;
    email: string | null;
    setEmail: (email: string | null) => void;
    // roles: RoleContextType[]; 
    // setRoles: (roles:RoleContextType[] ) => void;
}