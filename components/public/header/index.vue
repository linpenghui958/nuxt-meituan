<template>
  <div class="m-header">
    <el-row 
      :gutter="0" 
      class="m-header">
      <el-col :span="4">
        <geo />
      </el-col>
      <el-col :span="6">
        <user />
      </el-col>
      <el-col :span="14">
        <nav />
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
    Nav
  }
}
</script>

<style lang="scss">
</style>
