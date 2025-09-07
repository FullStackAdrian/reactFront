import { createRequest } from "../api";
import { DoLoginResponseType } from "../../../types/dto/DoLogin/responses/DoLoginResponseType";
import { DoLoginRequestType } from "../../../types/dto/DoLogin/requests/DoLoginRequestType";

export const fetchDoLogin = async (
  username: string,
  password: string
): Promise<DoLoginResponseType> => {
  try {
    const api = createRequest(null);
    const response = await api.post<DoLoginResponseType, DoLoginRequestType>(
      "/login",
      {
        username,
        password
      }
    );

    return response;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || error.message 
    );
  }
};
