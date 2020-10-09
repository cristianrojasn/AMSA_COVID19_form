<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    >
    <AMSAform/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import AMSAform from './components/AMSAform.vue';
export default {
  name: 'App',
  components: {
    Footer,
    AMSAform
  }
}
</script>

<style>
#app {
  background-image: linear-gradient(
    to top,
    rgb(51, 121, 147) 0%,
    rgb(171, 214, 216) 100%
  );
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
.md-menu-content.md-select-menu {
  width: auto;
  /*max-width: 400px !important;*/
}
.md-title {
  font-size: 20px !important;
}
</style>
