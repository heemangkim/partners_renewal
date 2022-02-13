<template>
  <header>
    <component :is="componentName"/>
  </header>
</template>

<script>
import MainHeader from '@/components/common/MainHeader';
import SubHeader from '@/components/common/SubHeader';
export default {
  name: "Header",
  components: {
    MainHeader,
    SubHeader
  },
  data() {
    return {
      componentName: '',
    }
  },
  created() {
    this.getHeaderComponent();
  },
  methods: {
    getHeaderComponent() {
      const current = this.$route.name;
      const SubHeaderList = ['ProductDetail', 'ProductForm'];
      if (SubHeaderList.includes(current)) {
        this.componentName = 'SubHeader';
      } else this.componentName = 'MainHeader';
    }
  }
}
</script>

<style scoped>

</style>