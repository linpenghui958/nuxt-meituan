<template>
  <div class="m-header">
    <el-row 
      :gutter="0" 
      class="m-header">
      <el-col :span="5">
        <geo />
      </el-col>
      <el-col :span="5">
        <user />
      </el-col>
      <el-col :span="14">
        <header-nav />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Geo from './geo'
import User from './user'
import Nav from './nav'
export default {
  components: {
    Geo,
    User,
    HeaderNav: Nav
  }
}
</script>

<style lang="scss">
@import '@/assets/css/public/layout.scss';
@import '@/assets/css/public/header/index.scss';
</style>
