import axios, { CreateAxiosDefaults } from 'axios'

import { API_URL } from '../constants/routes'

import { getContentType } from './api.helpers'

export const axiosOptions: CreateAxiosDefaults = {
    // baseURL: process.env.API_URL,
    baseURL: API_URL,
    headers: getContentType(),
    withCredentials: true,
}

export const axiosClassic = axios.create(axiosOptions)
