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

// this return the viewModel if it exists, otherwise trhow an error with response message
const responseBody = <T>(response: AxiosResponse): T => {
  const viewModel = response.data?.content?.viewModel;

  if (viewModel !== undefined) {
    return viewModel as T;
  }

  const message = response.data?.message || 'Respuesta del servidor inválida';
  throw new Error(message);
};

export const createRequest = (token?: string) => {
  const axiosInstance = createAxiosInstance(token);
  return {
    get: <T>(url: string) =>
      axiosInstance.get<T>(url).then(responseBody),
    post: <TResponse, TRequest>(url: string, body: TRequest ): Promise<TResponse> =>
      axiosInstance.post(url, body).then((response) => responseBody<TResponse>(response)),
  };
};
