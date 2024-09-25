
import axiosInstance from '@/config/http.config';
// import axios from 'axios';

const baseURL = process.env.VUE_APP_BASE_URL;



export function weilcomeApi( payload ) {

    return axiosInstance.post(`${baseURL}/v1/test_basic/submit`,payload)
}