<template>
  <div>
    <div class="row align-items-center">
      <div class="col-md-6 col-12">
        <h2><strong>Delicious Food</strong></h2>
        <h3>In Your Handphone</h3>
        <p>Ayo segera pilih dan pesan makanan favorit anda</p>
        <router-link class="btn btn-primary" to="/menu"><i class="fa fa-arrow-right mr-1"></i>Pesan Sekarang</router-link>
      </div>
      <div class="col-md-6 col-12">
        <img class="img-fluid" src="../assets/ilustrasi.png" alt="" />
      </div>
    </div>
    <BestFoods />
  </div>
</template>

<script>
import BestFoods from "../components/BestFoods";

export default {
  name: "Home",
  components: { BestFoods },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
