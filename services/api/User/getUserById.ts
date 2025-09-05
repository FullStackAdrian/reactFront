import { createRequest } from "../api";
import { GetUserRequest } from "../../../types/dto/User/requests/GetUserRequest";
import { GetUserResponse } from "../../../types/dto/User/responses/GetUserResponse";

export const fetchGetUserById = async (userId: number) => {
  try {
    const api = createRequest();

    const response = await api.get<GetUserResponse, GetUserRequest>(
      "user",
      {
        userId
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
