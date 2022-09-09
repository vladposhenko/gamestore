import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://631243c3f5cba498da900054.mockapi.io/',
})

export const gamesAPI = {
    async getGames() {
        let result = await axios.get('https://631243c3f5cba498da900054.mockapi.io/games')
        return result
    },
    async getGame (id) {
        debugger;
        let result = await axios.get('https://631243c3f5cba498da900054.mockapi.io/games/' + id)
        return result
    }
}

export const cartAPI = {
    async postGame (game) {
        let result = await axios.post('https://631243c3f5cba498da900054.mockapi.io/cart', game)
    },
    async deleteGame (gameId) {
        let result = await axios.delete('https://631243c3f5cba498da900054.mockapi.io/cart/' + gameId)
    },
    async getGamesFromCart () {
        let result = await axios.get('https://631243c3f5cba498da900054.mockapi.io/cart')
        return result
    },
}