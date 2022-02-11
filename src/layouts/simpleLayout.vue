<template>
  <div class="simple_wrap">
    <appMain></appMain>
    <appFooter></appFooter>
  </div>
</template>

<script>
import {AppMain, Footer} from "@/components/gnb";
export default {
  name: "SimpleLayout",
  components: {
    appMain: AppMain,
    appFooter: Footer
  },
}
</script>

<style scoped>

</style>