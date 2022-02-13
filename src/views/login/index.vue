<template>
  <div class="inner">
    <div class="login_wrap">
      <div class="logo">
        <p>오이마켓</p>
<!--        <img src="../../assets/images/logo/logo_pc.png" alt="Zipdoc">-->
      </div>
      <div class="form">
        <div class="form__login_id">
          <input type="text" placeholder="아이디를 입력하세요">
        </div>
        <div class="form__login_pwd">
          <input type="password" placeholder="비밀번호를 입력하세요">
        </div>
        <button class="button">로그인</button>
      </div>
      <div class="nav_button">
        <span>아이디와 비밀번호를 잊어버리셨나요?</span>
        <a href="">아이디/비밀번호 찾기</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form"
}
</script>

<style scoped>

</style>