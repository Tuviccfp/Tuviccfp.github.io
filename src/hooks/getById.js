import axios from 'axios'

export const getById = async (id) => {
    try {
        const response = axios.get(`https://victordev-api.vercel.app/get-articles/${id}`);
        return (await response).data;
    } catch (error) {
        return {message: error}
    }
}