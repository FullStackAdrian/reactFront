export interface PermissionType {

    id: number | null; 
    setId: (id: number | null) => void;
    type: string | null;
    setType: (type: string | null) => void;
    action: string| null;
    setAction: (action: string | null) => void;
}