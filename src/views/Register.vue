<template>
  <div>
    <div class="card text-center" style="max-width: 480px">
      <div class="card-header"><h3>Resto Linov</h3></div>
      <div class="card-body px-5 py-4">
        <h4 class="mb-4">Register</h4>
        <form @submit="login($event)" class="text-left">
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Email"
              v-model="registerData.email"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              v-model="registerData.password"
            />
          </div>
          <button class="btn btn-primary w-100">Register</button>
        </form>
        <router-link to="/login">Already have an account?</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      registerData: {
        email: "",
        password: "",
      },
    };
  },
  mounted(){
      this.$store.commit("LogOut");
  },
  methods: {
    async login(e) {
      e.preventDefault();
      await this.$store.dispatch("Register", this.registerData);
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 0 auto;
}
.card {
  margin: 100px auto;
}
</style>
