<template>
  <footer
    id="sticky-footer"
    class="py-4 text-white-50"
  >
    <div class="container text-center">
      <div class="mb-4">
        <img
          class="responsive-img"
          width="170px"
          height="170px"
          src="../assets/aklogo.jpeg"
        >
      </div>
      <div>
        <small>Powered by <b>AKonsulting</b></small>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
#sticky-footer {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  //   background-color: rgb(51, 121, 147);
  background-color: rgb(247, 247, 247);
  height: 230px;
  border-top-style: solid;
  border-color: rgb(228, 172, 59);
}
#sticky-footer small {
  font-size: 15px;
  color: darkgray;
}
#sticky-footer b {
  color: gray;
}
</style>