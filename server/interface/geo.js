import Router from 'koa-router'
import axios from './utils/axios'
import config from '../dbs/config'

let router = new Router({
  prefix: '/geo'
})

router.get('/getPosition', async (ctx) => {
  let { status, data: {province, city}} = await axios.get(`http://cp-tools.cn/geo/getPosition?sign=${config.sign.code}`)
  if (status === 200) {
    ctx.body = {
      province,
      city
    }
  } else {
    ctx.body = {
      province: '',
      city: ''
    }
  }
})

router.get('/menu', async (ctx) => {
  let { status, data: { menu }} = await axios.get(`http://cp-tools.cn/geo/menu?sign=${config.sign.code}`)
  if (status === 200) {
    ctx.body = {
      menu
    }
  } else {
    ctx.body = {
      menu: []
    }
  }
})

export default router