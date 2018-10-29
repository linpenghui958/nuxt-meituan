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
              v-for="(item,idx) in hotPlace"
              :key="idx">
              <a :href="'/products?keyword='+encodeURIComponent(item.name)">{{ item }}</a>
            </dd>
          </dl>
          <dl 
            v-if="isSearchList"
            class="searchList">
            <dd
              v-for="(item,idx) in searchList"
              :key="idx">
              <a :href="'/products?keyword='+encodeURIComponent(item.name)">{{ item }}</a>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="">博古馆</a>
          <a href="">博古馆</a>
          <a href="">博古馆</a>
          <a href="">博古馆</a>
          <a href="">博古馆</a>
          <a href="">博古馆</a>
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
export default {
  data() {
    return {
      search: '',
      isFocus: false,
      hotPlace: ['火锅', '火锅', '火锅', '火锅'],
      searchList: ['故宫', '故宫', '故宫']
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
    input() {
      console.log('input')
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/public/header/index.scss';
</style>
