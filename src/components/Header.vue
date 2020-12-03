<template>
  <!-- <nav class="navbar navbar-expand-md navbar-light mb-3">
    <router-link class="navbar-brand" to="/">Resto Linov</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/menu">Foods</router-link>
        </li>
      </ul>
    </div>
  </nav> -->
  <b-navbar toggleable="md" type="light">
    <b-navbar-brand to="/">Resto Linov</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/" :active="$route.name == 'Home'">Home</b-nav-item>
        <b-nav-item to="/menu" :active="$route.name == 'Menu'"
          >Foods</b-nav-item
        >
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/cart"
          >Keranjang<i class="fa fa-shopping-bag mx-1"></i
          ><span class="btn-primary cart-qty text-center">
            {{ cartQty }}
          </span></b-nav-item
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import services from "../services";

export default {
  name: "Header",
  computed: {
    cartQty() {
      return this.$store.state.cartQty;
    },
  },
  mounted() {
    services.getCart().then((res) => {
      this.$store.commit("addToCart", { qty: res.data.length });
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  padding: 1rem 0;
}
.cart-qty {
  border-radius: 100%;
  display: inline-block;
  min-width: 25px;
}
</style>
