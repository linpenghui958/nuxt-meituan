import Router from 'koa-router'
import Redis from 'koa-redis'
import nodeMailer from 'nodemailer'
import User from '../dbs/models/user'
import Passport from './utils/passport'
import Email from '../dbs/config'
import axios from './utils/axios'

let router = new Router({
  prefix: '/users'
})

let Store = new Redis().client

router.post('/signup', async (ctx) => {
  const { username, password, email, code } = ctx.request.body
  if (code) {
    const saveCode = await Store.hget(`nodemail:${username}`, 'code')
    const saveExpires = await Store.hget(`nodemail:${username}`, 'expires')
    if (code === saveCode) {
      if (new Date().getTime - saveExpires > 0) {
        ctx.body = {
          code: -1,
          msg: '验证码已过期'
        }
        return false
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '验证码错误'
      }
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '请输入验证码'
    }
  }

  let hasUser = await User.find({
    username
  })
  if (hasUser.length) {
    ctx.body = {
      code: -1,
      msg: '账号已存在'
    }
    return
  }
  let newUser = await User.create({ username, password, email })
  console.log(newUser)
  if (newUser) {
    let res = await axios.post('/users/signin', { username, password })
    if (res.data && res.data.code === 0) {
      ctx.body = {
        code: '0',
        msg: '注册成功',
        user: res.data.user
      }
    } else {
      ctx.body = {
        code: '-1',
        msg: 'error'
      }
    }
  }
})

router.post('/signin', async (ctx, next) => {
  return Passport.authenticate('local', (err, user, info, status) => {
    if (err) {
      ctx.body = {
        code: -1,
        msg: err
      }
    } else {
      if (user) {
        ctx.body = {
          code: 0,
          msg: '登陆成功',
          user
        }
        return ctx.login(user)
      } else {
        ctx.body = {
          code: 1,
          msg: info
        }
      }
    }
  })(ctx, next)
})

router.post('/verify', async (ctx, next) => {
  const transporter = nodeMailer.createTransport({
    host: Email.smtp.host,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: Email.smtp.user, // generated ethereal user
        pass: Email.smtp.pass // generated ethereal password
    }
  })
  const ko = {
    code: Email.smtp.code(),
    expires: Email.smtp.expire(),
    email: ctx.request.body.email,
    user: ctx.request.body.username
  }
  const mailOptions = {
    from: `认证邮件 <${Email.smtp.user}>`,
    to: ko.email,
    subject: '测试注册码',
    html: `您的注册码为${ko.code}`
  }
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    } else {
      Store.hmset(`nodemail:${ko.user}`, 'code', ko.code, 'expire', ko.expires, 'email', ko.email)
    }
  })
  ctx.body = {
    code: 0,
    msg: '验证码已发送，有效期一分钟'
  }
})

router.get('/exit', async (ctx, next) => {
  await ctx.logout()
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: 0
    }
  } else {
    ctx.body = {
      code: -1
    }
  }
})

router.get('/getUser', async (ctx) => {
  if (ctx.isAuthenticated()) {
    const {username, email} = ctx.session.passport.user
    ctx.body = {
      user: username,
      email
    }
  } else {
    ctx.body = {
      user: '',
      email: ''
    }
  }
})

export default router