<template>
  <div v-if="order.cart.length > 0">
    <h2>Keranjang <strong>Saya</strong></h2>
    <div class="row">
      <div class="col">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Foto</th>
              <th scope="col">Makanan</th>
              <th scope="col">Keterangan</th>
              <th scope="col">Jumlah</th>
              <th scope="col">Harga</th>
              <th scope="col">Total Harga</th>
              <th scope="col">Hapus</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(data, index) in order.cart" :key="data.id">
              <td>{{ index + 1 }}</td>
              <td>
                <img
                  class="img-fluid food-image"
                  :src="imageUrl(data.products.gambar)"
                  alt=""
                />
              </td>
              <td>{{ data.products.nama }}</td>
              <td>{{ data.keterangan }}</td>
              <!-- <td class="text-right">{{ data.jumlah_pemesanan }}</td> -->
              <td>
                <div class="form-group">
                  <input
                    type="number"
                    class="form-control"
                    v-model="data.jumlah_pemesanan"
                    style="max-width: 100px"
                    min="0"
                  />
                </div>
              </td>
              <td class="text-right">{{ currency(data.products.harga) }}</td>
              <td class="text-right">
                {{
                  currency(
                    totalHargaItem(data.products.harga, data.jumlah_pemesanan)
                  )
                }}
              </td>
              <td>
                <i class="fa fa-trash" @click="removeFromCart(data.id)"></i>
              </td>
            </tr>
            <tr>
              <th class="text-right" colspan="6">Total Harga</th>
              <th class="text-right">{{ currency(totalHarga()) }}</th>
              <th></th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 offset-md-8 col-12">
        <form @submit="pesan($event)">
          <div class="form-group">
            <label for="nama">Nama</label>
            <input
              type="text"
              class="form-control"
              id="nama"
              v-model="order.nama"
            />
          </div>
          <div class="form-group">
            <label for="noMeja">Nomor Meja</label>
            <input
              type="number"
              class="form-control"
              id="noMeja"
              v-model="order.noMeja"
            />
          </div>

          <button class="btn btn-primary float-right">
            <i class="fa fa-shopping-cart mr-1"></i>Pesan
          </button>
        </form>
      </div>
    </div>
  </div>
  <div v-else class="p-5 text-center"><h2>Keranjang masih kosong</h2></div>
</template>

<script>
import services from "../services/services";
import formatter from "../formatter/formatter";

export default {
  name: "Cart",
  data() {
    return {
      order: {
        nama: "",
        noMeja: null,
        cart: [],
      },
    };
  },

  mounted() {
    this.getData();
  },
  methods: {
    currency(data) {
      return formatter.currency(data);
    },
    getData() {
      return services.getCart().then((res) => {
        this.order.cart = res.data;
      });
    },
    imageUrl(url) {
      return require("@/assets/" + url);
    },
    totalHargaItem(harga, jumlah) {
      return harga * jumlah;
    },
    totalHarga() {
      return this.order.cart.reduce((total, data) => {
        return total + data.jumlah_pemesanan * data.products.harga;
      }, 0);
    },
    async removeFromCart(id) {
      await services.deleteCart(id);
      await this.getData();
      this.$store.commit("removeFromCart", { qty: 1 });
    },
    async pesan(e) {
      e.preventDefault();
      for (let data of this.order.cart) {
        await services.deleteCart(data.id);
      }
      await services.order(this.order);
      this.$store.commit("clearCart");
      this.$router.push({ path: "/success" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.food-image {
  width: 300px;
}
.fa-trash {
  color: red;
}
</style>
