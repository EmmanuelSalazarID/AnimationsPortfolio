/* eslint-disable no-underscore-dangle */
import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios';
import { API_URL } from 'config/config';

type Headers = {
  [K in keyof AxiosRequestHeaders]?: AxiosRequestHeaders[K];
};

export default class Api {
  private static instance: Api;

  private _axiosInstance: AxiosInstance;

  private _headers: Headers = {
    accept: '*/*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'true',
  };

  private _accessToken: string = '';

  private constructor() {
    this._axiosInstance = axios.create({
      baseURL: API_URL,
      headers: this._headers,
    });
  }

  get axiosInstance(): AxiosInstance {
    return this._axiosInstance;
  }

  get headers(): AxiosRequestHeaders {
    return this._headers as AxiosRequestHeaders;
  }

  get accessToken(): string {
    return this._accessToken;
  }

  set accessToken(token: string) {
    this._accessToken = token;
    this._headers.Authorization = `Bearer ${token}`;
    this._axiosInstance.defaults.headers.common.Authorization = this._headers.Authorization;
  }

  private static initializeInstance() {
    if (!Api.instance) {
      Api.instance = new Api();
    }
  }

  public static getInstance(): Api {
    Api.initializeInstance();
    return Api.instance;
  }

  public useInterceptor(onError: (status: number, message?: string) => void): number {
    return this._axiosInstance.interceptors.response.use(
      null,
      (error) => {
        onError(error.response?.status || 500, error.response?.data?.message);
        return Promise.reject(error);
      },
    );
  }

  public ejectInterceptor(interceptor: number): void {
    this._axiosInstance.interceptors.response.eject(interceptor);
  }
}
