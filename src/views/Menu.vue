<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h1>Daftar <strong>Makanan</strong></h1>
      </div>
      <div class="col-12">
        <div class="input-group mb-3" style="width: 100%">
          <input
            type="text"
            class="form-control"
            placeholder="Cari makanan kesukaan anda"
            v-model="keyword"
            @input="getAllFoods()"
          />
          <div class="input-group-append">
            <span class="input-group-text"><i class="fa fa-search"></i></span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-12 my-2" v-for="food in foodList" :key="food.id">
        <Food :food="food" />
      </div>
    </div>
  </div>
</template>

<script>
import Food from "../components/Food";
import services from "../services/services";

export default {
  name: "Menu",
  components: { Food },
  data() {
    return {
      foodList: [],
      keyword: "",
    };
  },
  mounted() {
    this.getAllFoods();
  },
  methods: {
    getAllFoods() {
      services.getAllFoods(this.keyword).then((res) => {
        this.foodList = res.data;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  margin: 1rem 0;
}
</style>
