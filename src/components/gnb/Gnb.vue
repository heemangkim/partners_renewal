<template>
  <nav class="gnb_wrap">
    <ul>
      <li>
        <router-link to="/">
          <img src="../../assets/images/icons/home.png" alt="홈">
        </router-link>
      </li>
      <li>
        <router-link to="/product">
          <img src="../../assets/images/icons/location.png" alt="위치">
        </router-link>
      </li>
      <li>
        <router-link to="/chat">
          <img src="../../assets/images/icons/bubble-chat.png" alt="채팅">
        </router-link>
      </li>
      <li>
        <router-link to="/my">
          <img src="../../assets/images/icons/user.png" alt="유저">
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Gnb"
}
</script>

<style scoped>

</style>