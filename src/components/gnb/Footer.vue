<template>
  <footer>
    <div class="inner">
      <div class="footer_wrap">
        <nav class="footer_link">
          <ul>
            <li><a href="">회사소개</a></li>
            <li><a href=""><b>개인정보처리방침</b></a></li>
            <li><a href="">이용약관</a></li>
            <li><a href="">입점문의</a></li>
            <li>
              <a href=""><img class="img_button" src="../../assets/images/buttons/btn-google@2x.png" alt="Google play">
              </a>
            </li>
            <li>
              <a href=""><img class="img_button" src="../../assets/images/buttons/btn-apple@2x.png" alt="Apple store"></a>
            </li>
          </ul>
        </nav>
        <div class="footer_information">
          <div class="row">
            <p @click="call('1600-3069')" class="company_call">1600 - 3069</p>
            <p>월 - 금: 09:00 - 18:00 (주말/공휴일 제외)</p>
            <p>팩스 : 02-6274-1130</p>
            <p>고객문의 : cs@zipdoc.kr</p>
            <p>제휴문의 : partnership@zipdoc.kr</p>
          </div>
          <div class="row">
            <p>집닥주식회사 대표이사 : 김성익</p>
            <p>주소 : 서울 강남구 테헤란로 503 하이브로빌딩 9층</p>
            <p>사업자등록번호 : 793-81-00149</p>
            <p>통신판매번호 : 2018-서울강남-01196호</p>
            <p>사업자정보확인</p>
          </div>
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