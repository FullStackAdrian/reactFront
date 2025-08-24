import { UserType } from "../entities/UserType";

export interface UserContextType {
    user: UserType | null;
    setUser: (user: UserType | null) => void;
    
}