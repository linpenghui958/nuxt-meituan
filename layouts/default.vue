<template>
  <el-container class="layout-default">
    <el-header height="197px">
      <home-header />
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer>
      <home-footer></home-footer>
    </el-footer>
  </el-container>
</template>

<script>
import HomeHeader from '@/components/public/header/index'
import HomeFooter from '@/components/public/footer/index.vue'
export default {
  components: {
    HomeHeader,
    HomeFooter
  }
}
</script>

<style>
</style>
