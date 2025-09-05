import { UserType } from "../entities/UserType";

export interface AuthUserContextType {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
}
