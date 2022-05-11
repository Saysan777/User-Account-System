<template>
  <div>
    <Nav />
    <Header />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from "../../client/components/Navbar/Nav.vue";
import Header from "../../client/components/Header/Header.vue";

export default {
  data() {
    return {
      isPlaying: false,
      isLogin: false,
      isRegister: false,
    };
  },
  components: {
    Nav,
    Header,
  },
  methods: {
    showLogin() {
      this.isLogin = !this.isLogin;
      this.isRegister = false;
    },
    showRegister() {
      this.isRegister = !this.isRegister;
    },
  },
};
</script>

<style>
body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
}
</style>
