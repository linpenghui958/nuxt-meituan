<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col 
        :span="3" 
        class="left">
          <img 
            src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" 
            alt="美团">
        </el-col>
      <el-col
        :span="15"
        class="center">
        <div class="wrapper">
          <el-input 
            v-model="search"
            placeholder="搜索商家或地点" 
            @focus="focus"
            @input="input"
            @blur="blur"></el-input>
          <button class="el-button el-button--primary"><i class="el-icon-search"></i></button>
          <dl
            v-if="isHotPlace" 
            class="hotPlace">
            <dt>热门搜索</dt>
            <dd
              v-for="(item,idx) in this.$store.state.home.hotPlace.slice(0, 5)"
              :key="idx">
              <a :href="'/products?keyword='+encodeURIComponent(item.name)">{{ item.name }}</a>
            </dd>
          </dl>
          <dl 
            v-if="isSearchList"
            class="searchList">
            <dd
              v-for="(item,idx) in searchList"
              :key="idx">
              <a :href="'/products?keyword='+encodeURIComponent(item.name)">{{ item.name }}</a>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a
            v-for="(item,idx) in $store.state.home.hotPlace.slice(0,5)"
            :key="idx"
            :href="'/products?keyword='+encodeURIComponent(item.name)">{{ item.name }}</a>
        </p>
        <ul class="nav">
          <li><nuxt-link
            to="/"
            class="takeout">美团外卖</nuxt-link></li>
          <li><nuxt-link
            to="/"
            class="movie">猫眼电影</nuxt-link></li>
          <li><nuxt-link
            to="/"
            class="hotel">美团酒店</nuxt-link></li>
          <li><nuxt-link
            to="/"
            class="apartment">民宿/公寓</nuxt-link></li>
          <li><nuxt-link
            to="/"
            class="business">商家入驻</nuxt-link></li>
        </ul>
      </el-col>
      <el-col :span="6" class="right">
        <ul class="security">
          <li><i class="refund"></i><p class="text">随时退</p></li>
          <li><i class="single"></i><p class="text">不满意面单</p></li>
          <li><i class="overdue"></i><p class="text">过期退</p></li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      search: '',
      isFocus: false,
      searchList: []
    }
  },
  computed: {
    isHotPlace() {
      return this.isFocus && !this.search
    },
    isSearchList() {
      return this.isFocus && this.search
    }
  },
  methods: {
    focus() {
      this.isFocus = true
    },
    blur() {
      setTimeout(() => {
        this.isFocus = false
      }, 200)
    },
    input: _.debounce(async function () {
      console.log(this)
      let city = this.$store.state.geo.position.city.replace('市', '')
      this.searchList = []
      let { status, data: { top }} = await this.$axios.get('/search/top', {
        params: {
          input: this.search,
          city
        }
      })
      console.log(top)
      this.searchList = top.slice(0, 10)
    }, 500),
  }
}
</script>

<style lang="scss">
@import '@/assets/css/public/header/index.scss';
</style>
