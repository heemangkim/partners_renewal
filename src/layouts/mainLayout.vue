<template>
  <div>
    <appHeader></appHeader>
    <appMain></appMain>
    <appGnb></appGnb>
    <floatButton></floatButton>
  </div>
</template>

<script>
import {Header, Gnb, AppMain} from "@/components/gnb";
import {mapMutations, mapGetters} from 'vuex';
import FloatButton from "@/components/gnb/FloatButton";
export default {
  name: "Layout",
  computed: {
    ...mapGetters(['isMobile']),
  },
  components: {
    FloatButton,
    appHeader: Header,
    appMain: AppMain,
    appGnb: Gnb,
  },
  methods: {
    ...mapMutations([
        'setMediaPoint'
    ])
  }
}
</script>

<style scoped>

</style>