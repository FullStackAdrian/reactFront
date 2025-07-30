import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

const createAxiosInstance = (token?: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: 'https://localhost:5041/api/v1',
  });

  instance.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  instance.interceptors.response.use(
    (res) => res,
    (error: AxiosError) => {
      const { data, status } = error.response!;
      switch (status) {
        case 400:
          console.error(data);
          break;
        case 401:
          console.error('unauthorised');
          break;
        case 404:
          console.error('/not-found');
          break;
        case 500:
          console.error('/server-error');
          break;
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

export const createRequest = (token?: string) => {
  const axiosInstance = createAxiosInstance(token);
  return {
    get: <T>(url: string) => axiosInstance.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axiosInstance.post<T>(url, body).then(responseBody),
    // put, delete, etc. can be added here as needed
  };
};
