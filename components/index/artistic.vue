<template>
  <section class="m-istyle">
    <dl @mouseover="over">
      <dt>有格调</dt>
      <dd
        :class="{active:kind === 'all'}"
        kind="all"
        keyword="景点">全部
      </dd>
      <dd
        :class="{active:kind === 'part'}"
        kind="part"
        keyword="美食">约会聚餐
      </dd>
      <dd
        :class="{active:kind === 'spa'}"
        kind="spa"
        keyword="丽人">丽人SPA
      </dd>
      <dd
        :class="{active:kind === 'movie'}"
        kind="movie"
        keyword="电影">电影演出
      </dd>
      <dd
        :class="{active:kind === 'travel'}"
        kind="travel"
        keyword="旅游">旅游
      </dd>
    </dl>
    <ul class="ibody">
      <li
        v-for="item in cur"
        :key="item.title">
        <el-card
          :body-style="{ padding: '0px' }"
          shadow="never">
          <img
            :src="item.img"
            class="image">
          <ul class="cbody">
            <li class="title">{{ item.title }}</li>
            <li class="pos"><span>{{ item.pos }}</span></li>
            <li class="price">￥<em>{{ item.price }}</em><span>/起</span></li>
          </ul>
        </el-card>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      kind: 'all',
      // prettier-ignore
      list: {
        all: [
          {
            title: '第六季自助餐厅（王府井店）',
            img: '//p1.meituan.net/msmerchant/29b5616cf872a3a526cec84a97e72936166165.jpg@368w_208h_1e_1c',
            pos: '单人限时抢购自助',
            price: '298'
          },
          {
            title: '祈年八号中餐厅',
            img: '//p0.meituan.net/mogu/fc091566222b23c51857ab4316633e43370925.jpg@368w_208h_1e_1c',
            pos: '单人点心自助午餐',
            price: '92'
          },
          {
            title: '祈年八号中餐厅01',
            img: '//p0.meituan.net/mogu/fc091566222b23c51857ab4316633e43370925.jpg@368w_208h_1e_1c',
            pos: '单人点心自助午餐',
            price: '92'
          }
        ],
        part: [
          {
            title: '第六季自助餐厅（王府井店）01',
            img: '//p1.meituan.net/msmerchant/29b5616cf872a3a526cec84a97e72936166165.jpg@368w_208h_1e_1c',
            pos: '单人限时抢购自助',
            price: '298'
          },
          {
            title: '祈年八号中餐厅02',
            img: '//p0.meituan.net/mogu/fc091566222b23c51857ab4316633e43370925.jpg@368w_208h_1e_1c',
            pos: '单人点心自助午餐',
            price: '92'
          },
          {
            title: '祈年八号中餐厅03',
            img: '//p0.meituan.net/mogu/fc091566222b23c51857ab4316633e43370925.jpg@368w_208h_1e_1c',
            pos: '单人点心自助午餐',
            price: '92'
          }
        ],
        spa: [
          {
            title: '第六季自助餐厅（王府井店）001',
            img: '//p1.meituan.net/msmerchant/29b5616cf872a3a526cec84a97e72936166165.jpg@368w_208h_1e_1c',
            pos: '单人限时抢购自助',
            price: '298'
          },
          {
            title: '祈年八号中餐厅002',
            img: '//p0.meituan.net/mogu/fc091566222b23c51857ab4316633e43370925.jpg@368w_208h_1e_1c',
            pos: '单人点心自助午餐',
            price: '92'
          },
          {
            title: '祈年八号中餐厅003',
            img: '//p0.meituan.net/mogu/fc091566222b23c51857ab4316633e43370925.jpg@368w_208h_1e_1c',
            pos: '单人点心自助午餐',
            price: '92'
          }
        ],
        movie: [
          {
            title: '第六季自助餐厅（王府井店）0001',
            img: '//p1.meituan.net/msmerchant/29b5616cf872a3a526cec84a97e72936166165.jpg@368w_208h_1e_1c',
            pos: '单人限时抢购自助',
            price: '298'
          },
          {
            title: '祈年八号中餐厅0002',
            img: '//p0.meituan.net/mogu/fc091566222b23c51857ab4316633e43370925.jpg@368w_208h_1e_1c',
            pos: '单人点心自助午餐',
            price: '92'
          },
          {
            title: '祈年八号中餐厅0003',
            img: '//p0.meituan.net/mogu/fc091566222b23c51857ab4316633e43370925.jpg@368w_208h_1e_1c',
            pos: '单人点心自助午餐',
            price: '92'
          }
        ],
        travel: [
          {
            title: '第六季自助餐厅（王府井店）00001',
            img: '//p1.meituan.net/msmerchant/29b5616cf872a3a526cec84a97e72936166165.jpg@368w_208h_1e_1c',
            pos: '单人限时抢购自助',
            price: '298'
          },
          {
            title: '祈年八号中餐厅00002',
            img: '//p0.meituan.net/mogu/fc091566222b23c51857ab4316633e43370925.jpg@368w_208h_1e_1c',
            pos: '单人点心自助午餐',
            price: '92'
          },
          {
            title: '祈年八号中餐厅00003',
            img: '//p0.meituan.net/mogu/fc091566222b23c51857ab4316633e43370925.jpg@368w_208h_1e_1c',
            pos: '单人点心自助午餐',
            price: '92'
          }
        ]
      }
    }
  },
  computed: {
    cur() {
      return this.list[this.kind]
    }
  },
  methods: {
    over(e) {
      let dom = e.target
      let tag = dom.tagName.toLowerCase()
      if (tag === 'dd') {
        this.kind = dom.getAttribute('kind')
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/index/artistic.scss';
</style>
