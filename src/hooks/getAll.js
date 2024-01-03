import axios from 'axios';

export const getAll = async () => {
    try {
        const response = axios.get("https://victordev-api.vercel.app/get-articles");
        return (await response).data;
    } catch (error) {
        return {message: error}
    }
}