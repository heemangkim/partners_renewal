<template>
  <footer>
    <div class="inner">
      <div class="footer_wrap">
        <nav class="footer_link">
          <ul>
            <li><a href="">회사소개</a></li>
            <li><a href=""><b>개인정보처리방침</b></a></li>
            <li><a href="">이용약관</a></li>
          </ul>
        </nav>
        <div class="footer_text">
          <p>ⓒOeMarket Corp.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    call(tel) {
      document.location.href = "tel:" + tel;
    },
  }
}
</script>

<style scoped>

</style>