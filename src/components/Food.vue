<template>
  <div class="card">
    <img class="card-img-top" :src="imageUrl" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{{ food.nama }}</h5>
      <p class="card-text">Harga: {{ currency(food.harga) }}</p>
      <router-link :to="'detail/' + food.id" class="btn btn-primary"
        ><i class="fa fa-shopping-cart mr-1"></i>Pesan</router-link
      >
    </div>
  </div>
</template>

<script>
import formatter from '../formatter/formatter';
export default {
  name: "Food",
  props: ["food"],
  data() {
    return {};
  },
  computed: {
    imageUrl() {
      return require("@/assets/" + this.food.gambar);
    },
  },
  methods: {
    currency(data) {
      return formatter.currency(data);
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-img-top {
  height: 200px;
}
</style>
