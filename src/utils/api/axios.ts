import axios, { CreateAxiosDefaults } from 'axios'

import { getContentType } from './api.helpers'

export const axiosOptions: CreateAxiosDefaults = {
    // baseURL: process.env.API_URL,
    baseURL: 'http://localhost:8090/',
    headers: getContentType(),
    withCredentials: true,
}

export const axiosClassic = axios.create(axiosOptions)
