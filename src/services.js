import axios from 'axios'

export default {
    getBestFoods() {
        return axios.get('http://localhost:3000/best-products')
    },
    getAllFoods(keyword) {
        return axios.get('http://localhost:3000/products?q=' + keyword)
    },
    getFood(id) {
        return axios.get('http://localhost:3000/products/' + id)
    },
    addToCart(order) {
        return axios.post('http://localhost:3000/keranjangs', order)
    },
    getCart() {
        return axios.get('http://localhost:3000/keranjangs')
    },
    order(order) {
        return axios.post('http://localhost:3000/pesanans', order)
    },
    deleteCart(id) {
        return axios.delete('http://localhost:3000/keranjangs/' + id)
    }
}