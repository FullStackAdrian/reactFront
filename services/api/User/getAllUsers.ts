import { createRequest } from "../api";
import { GetAllUserRequest } from "../../../types/dto/User/requests/GetAllUserRequest";
import { GetUserResponse } from "../../../types/dto/User/responses/GetUserResponse";

export const fetchGetAllUsers = async (includeRoles: boolean) => {
  try {
    const api = createRequest();

    const response = await api.get<GetUserResponse, GetAllUserRequest>(
      "/user/all/",
      {
        options: {
          includeRoles: includeRoles,
        }
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
