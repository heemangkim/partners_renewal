<template>
  <div>
    <div class="top_banner">
      Banner1
    </div>
    <div class="zzim_alarm">
      <p>관심 있는 물건이 올라왔어요!</p>
      <ul class="zzim_alarm__tag">
          <li v-for="item in zzimList" :key="item.code" :class="{active: item.code == active}">
            <a href="">{{item.text}}</a>
          </li>
      </ul>
      <ul class="zzim_alarm__photo">
        <li>
          <img src="http://img.danawa.com/prod_img/500000/510/687/img/2687510_1.jpg?shrink=330:330&_v=20210617121846" alt="">
        </li>
        <li>
          <img src="http://img.danawa.com/prod_img/500000/510/687/img/2687510_1.jpg?shrink=330:330&_v=20210617121846" alt="">
        </li>
        <li>
          <img src="http://img.danawa.com/prod_img/500000/510/687/img/2687510_1.jpg?shrink=330:330&_v=20210617121846" alt="">
        </li>
      </ul>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/gnb/Footer";
export default {
  name: "Home",
  components: {
    Footer
  },
  data() {
    return {
      active: 1,
      zzimList: [
        {code: 1, text: '바운서'},
        {code: 2, text: '유모차'},
        {code: 3, text: '아기유모차'}
      ]
    }
  }

}
</script>

<style scoped>

</style>