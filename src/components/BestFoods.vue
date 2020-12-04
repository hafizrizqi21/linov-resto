<template>
  <div>
    <div class="row my-4 align-items-center">
      <div class="col-md-6 col-12">
        <h3>Best <strong>Foods</strong></h3>
      </div>
      <div class="col-md-6 col-12 text-right">
        <router-link class="btn btn-primary" to="/menu"><i class="fa fa-eye mr-1"></i>Lihat Semua</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-12" v-for="food in bestFoods" :key="food.id">
        <Food :food="food" />
      </div>
    </div>
  </div>
</template>

<script>
import services from "../services/services";
import Food from "./Food";

export default {
  name: "BestFoods",
  components: { Food },
  data() {
    return {
      bestFoods: [],
    };
  },
  mounted() {
    services.getBestFoods().then((res) => {
      this.bestFoods = res.data;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
