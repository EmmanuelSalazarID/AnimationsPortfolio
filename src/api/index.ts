import Api from './api';

// export * from './any-file';

const apiInstance = Api.getInstance();
const api = apiInstance.axiosInstance;
const { headers } = apiInstance;

export {
  apiInstance as apiConfig,
  api,
  headers,
};
