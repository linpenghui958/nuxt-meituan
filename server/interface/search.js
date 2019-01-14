import Router from 'koa-router'
import axios from './utils/axios'
import Poi from '../dbs/models/poi'
import config from '../dbs/config'

let router = new Router({
  prefix: '/search'
})

router.get('/top', async (ctx) => {
  let { status, data: { top }} = await axios.get(`http://cp-tools.cn/search/top`, {
    params: {
      input: ctx.query.input,
      city: ctx.query.city,
      sign: config.sign.code
    }
  })
  ctx.body = {
    top: status === 200
          ? top
          : []
  }
})

router.get('/hotPlace', async (ctx) => {
  let city = ctx.store
              ? ctx.store.get.position.city
              : ctx.query.city
  let { status, data: { result }} = await axios.get(`http://cp-tools.cn/search/hotPlace`, {
    params: {
      sign: config.sign.code,
      city
    }
  })
  ctx.body = {
    result: status === 200
            ? result
            : []
  }
})

router.get('/resultsByKeywords', async (ctx) => {
  const { city, keyword } = ctx.query
  let { status, data: { count, pois }} = await axios.get('http://cp-tools.cn/search/resultsByKeywords', {
    params: {
      city,
      keyword,
      sign: config.sign.code
    }
  })
  ctx.body = {
    count: status === 200 ? count : 0,
    pois: status === 200 ? pois : []
  }
})

export default router