<template>
  <div class=""></div>
</template>

<script>
  export default {
    layout: 'blank',
    middlewart: async (ctx) => {
      let { status, data } = await ctx.$axios.post('/users/exit')
      if (status === 200 && data && data.code == 0) {
        window.location.href = '/'
      }
    }
  }
</script>
