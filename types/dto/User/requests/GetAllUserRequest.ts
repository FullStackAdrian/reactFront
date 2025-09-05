export interface GetAllUserRequest {
  authenticatedUserId: number;
  options?: {
    includeRoles?: boolean;
  };
}
