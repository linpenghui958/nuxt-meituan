<template>
  <div class="m-menu">
    <dl class="nav">
      <dt>全部分类</dt>
      <dd 
        v-for="(item, idx) in menu" 
        :key="idx">
        <i :class="item.type"/> {{ item.name }} <span class="arrow" />
      </dd>
    </dl>

  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: '',
      menu: [
        {
          type: 'food',
          name: '美食',
          child: [
            {
              title: '美食',
              child: ['代金券', '甜点', '火锅', '自助餐']
            }
          ]
        },
        {
          type: 'takeout',
          name: '外卖',
          child: [
            {
              title: '外卖',
              child: ['美团外卖']
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
