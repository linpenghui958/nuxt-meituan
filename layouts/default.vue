<template>
  <el-container>
    <el-header class="layout-default">
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
