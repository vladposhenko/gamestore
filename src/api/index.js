import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://631243c3f5cba498da900054.mockapi.io/',
})

export const gamesAPI = {
    async getGames() {
        let result = await axios.get('https://631243c3f5cba498da900054.mockapi.io/games')
        return result.data
    },
    async getGame (id) {
        let result = await axios.get('https://631243c3f5cba498da900054.mockapi.io/games/' + id)
        return result.data
    }
}