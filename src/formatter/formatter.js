export default {
    currency(data) {
        return 'Rp. ' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
}