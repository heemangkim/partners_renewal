<template>
  <div class="pdt_form">
    <div class="row">
      <label>이미지</label>
      <ul class="pdt_form__files">
        <li>
          <input type="file"/>
        </li>
        <li>
          <input type="file"/>
        </li>
        <li>
          <input type="file"/>
        </li>
        <li>
          <input type="file"/>
        </li>
        <li>
          <input type="file"/>
        </li>
      </ul>
    </div>
    <div class="row">
      <label>제목</label>
      <input type="text" placeholder="제목을 입력해주세요">
    </div>
    <div class="row">
      <label>카테고리</label>
      <input type="text" placeholder="카테고리를 선택해주세요">
    </div>
    <div class="row">
      <label>하루금액</label>
      <input type="text" placeholder="일 렌탈비용을 입력해주세요">
    </div>
    <div class="row">
      <label>설명</label>
      <input type="text" placeholder="상세설명을 입력해주세요">
    </div>
    <div class="row">
      <button class="button">등록하기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductForm"
}
</script>

<style scoped>

</style>