import { PermissionContextType } from "./PermissionContextType";
export interface RoleContextType {

    id: number | null; 
    setId: (id: number | null) => void;
    roleName: string | null; 
    setRoleName: (roleName: string | null) => void;
    permissions: PermissionContextType[];
    setPermissions: (permissions: PermissionContextType[]) => void;
}