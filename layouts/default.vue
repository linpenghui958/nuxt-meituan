<template>
  <el-container class="layout-default">
    <el-header height="197px">
      <home-header />
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer>footer</el-footer>
  </el-container>
</template>

<script>
import HomeHeader from '@/components/public/header/index'
export default {
  components: {
    HomeHeader
  }
}
</script>

<style>
</style>
