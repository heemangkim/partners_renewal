<template>
  <nav class="header_nav">
    <div class="left">
      <router-link to="/">
        <img src="../../assets/images/icons/before.png" alt="뒤로">
      </router-link>
      <router-link to="/">
        <img src="../../assets/images/icons/home.png" alt="홈">
      </router-link>
    </div>
    <div class="right">
      <router-link to="/">
        <img src="../../assets/images/icons/calendar.png" alt="">
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SubHeader"

}
</script>

<style scoped>

</style>