<template>
  <div class="pdt_list_wrap">
    <div class="pdt_list__category">
      <ul>
        <li v-for="item in categoryList" :key="item.code">{{item.text}}</li>
      </ul>
    </div>
    <div class="pdt_list__items">
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  data() {
    return{
      categoryList: [
        {code: 1, text: '디지털기기'},
        {code: 2, text: '생활가전'},
        {code: 3, text: '가구/인테리어'},
        {code: 4, text: '유아동'},
        {code: 5, text: '생활/가공식품'},
        {code: 6, text: '스포츠/레저'},
        {code: 7, text: '게임/취미'},
        {code: 8, text: '반려동물용품'},
      ]
    }
  },
}
</script>

<style scoped>

</style>