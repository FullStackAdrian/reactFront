import { PermissionType } from "./PermissionType";
export interface RoleType {
  id: number | null;
  setId: (id: number | null) => void;
  roleName: string | null;
  setRoleName: (roleName: string | null) => void;
  permissions: PermissionType[];
  setPermissions: (permissions: PermissionType[]) => void;
}
