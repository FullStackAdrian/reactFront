import { createRequest } from "../api";
import { GetUserRequest } from "../../../types/dto/User/requests/GetUserRequest";
import { GetUserWithRolesResponse } from "../../../types/dto/User/responses/GetUserWithRolesResponse";

export const fetchGetUserById = async (userId: number) => {
  try {
    const api = createRequest();

    const response = await api.get<GetUserWithRolesResponse, GetUserRequest>(
      "user",
      {
        userId,
      },
    );
    return response;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
