import { RoleType } from "../../../entities/RoleType";

export interface GetUserResponse {
  userId: number;
  username: string;
  email: string | null;
  roles: RoleType[] | [];
}
