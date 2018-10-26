<template>
  <div class="m-header">
    <el-row 
      :gutter="15" 
      class="m-header">
      <el-col :span="6">
        <geo />
      </el-col>
      <el-col :span="6">
        <user />
      </el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>
import Geo from './geo'
import User from './user'
export default {
  components: {
    Geo,
    User
  }
}
</script>

<style lang="scss">
</style>
