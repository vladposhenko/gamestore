export const calcTotalPrice = items => items.reduce((acc,game) => acc += game.price , 0)
export function getItemsFromStorage () {
    let items = localStorage.getItem('cart')
    return JSON.parse(items)
}