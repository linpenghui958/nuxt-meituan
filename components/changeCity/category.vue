<template>
  <div>
    <dl class="m-category">
      <dt>按拼音首字母选择：</dt>
      <dd
        v-for="item in list"
        :key="item">
        <a :href="'#city-' + item">{{ item }}</a>
      </dd>
    </dl>
    <dl
      v-for="item in block"
      :key="item.title"
      class="m-category-section">
      <dt :id="'city-' + item.title"> {{ item.title }}</dt>
      <dd>
        <span
          :v-for="c in item.city"
          :key="c">{{ c }}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
