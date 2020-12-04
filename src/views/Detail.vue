<template>
  <div v-if="order.products.id">
    <div class="row mb-4">
      <div class="col">
        <router-link style="link" to="/">Home</router-link> /
        <router-link style="link" to="/menu">Foods</router-link> /
        <strong>Food Order</strong>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-12">
        <img class="img-fluid" :src="imageUrl" alt="" />
      </div>
      <div class="col-md-6 col-12">
        <div class="row">
          <div class="col-12 mb-1">
            <h3>
              <strong>{{ order.products.nama }}</strong>
            </h3>
          </div>
          <div class="col-12 d-flex align-items-center mb-1">
            <h3>
              Harga:
              <strong>{{ currency(order.products.harga) }}</strong>
            </h3>
          </div>
          <div class="col-12">
            <form @submit="pesan($event)">
              <div class="form-group">
                <label for="jumlah_pemesanan">Jumlah Pesan</label>
                <input
                  type="number"
                  class="form-control"
                  id="jumlah_pemesanan"
                  v-model="order.jumlah_pemesanan"
                />
              </div>
              <div class="form-group">
                <label for="keterangan">Keterangan</label>
                <textarea
                  class="form-control"
                  id="keterangan"
                  rows="2"
                  placeholder="seperti: pedas, nasi setengah"
                  v-model="order.keterangan"
                ></textarea>
              </div>

              <button class="btn btn-primary">
                <i class="fa fa-shopping-cart mr-1"></i>Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formatter from '../formatter/formatter';
import services from "../services/services";

export default {
  name: "Detail",
  data() {
    return {
      order: {
        jumlah_pemesanan: 0,
        keterangan: "",
        products: {},
      },
    };
  },
  mounted() {
    services.getFood(this.$route.params.id).then((res) => {
      this.order.products = res.data;
    });
  },
  computed: {
    imageUrl() {
      return require("@/assets/" + this.order.products.gambar);
    },
  },
  methods: {
    currency(data) {
      return formatter.currency(data);
    },
    async pesan(e) {
      e.preventDefault();
      await services.addToCart(this.order);

      this.$store.commit("addToCart", { qty: 1 });
      this.$router.push({ path: "/cart" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.link a {
  color: black;
}
</style>
