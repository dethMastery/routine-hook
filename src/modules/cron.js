const color = require('bash-color')
const cron = require('node-cron')
const hookcord = require('hookcord')

require('dotenv').config()
const env = process.env

const url = env.HOOK_URL.replace('https://discord.com/api/webhooks/', '').split(
  '/'
)

const date = require('./date')

const id = url[0]
const secret = url[1]

const Hook = new hookcord.Hook().login(id, secret)

cron.schedule('* * * * *', () => {
  console.log(`[${color.cyan(date)}] : keep online :)`)
})

cron.schedule('0 19 * * *', () => {
  Hook.setPayload({
    embeds: [
      {
        title: 'พรฟ้า! กินยาด้วย',
        color: 15257231,
        fields: [
          {
            name: 'อย่าลืมกินยานะคะ ไอตะเร้กของเค้า',
            value: 'Tag เรียก @pompommuu_',
          },
        ],
      },
    ],
  })

  Hook.fire()
    .then(() => {
      console.log(`[${color.blue(date)}] : Cron Send! :)`)
    })
    .catch((err) => {
      console.log(`[${color.red(date)}] : ${err}`)
    })
})

cron.schedule('0 */1 * * *', () => {
  Hook.setPayload({
    embeds: [
      {
        title: 'พรฟ้า! พ่นยาด้วย!!',
        color: 15257231,
        fields: [
          {
            name: 'อย่าลืมพ่นยาด้วยนะคะ ไอตะเร้กของเค้า',
            value: 'Tag เรียก @pompommuu_',
          },
        ],
      },
    ],
  })

  Hook.fire()
    .then(() => {
      console.log(`[${color.blue(date)}] : Cron Send! :)`)
    })
    .catch((err) => {
      console.log(`[${color.red(date)}] : ${err}`)
    })
})

cron.schedule('30 23 * * *', () => {
  Hook.setPayload({
    embeds: [
      {
        title: 'กินแก้แพ้ด้วย!!',
        color: 15257231,
        fields: [
          {
            name: 'กินแก้แพ้ด้วยเดี๋ยวตาย',
            value: 'Tag เรียก @_dethz @dethz._',
          },
        ],
      },
    ],
  })

  Hook.fire()
    .then(() => {
      console.log(`[${color.blue(date)}] : Cron Send! :)`)
    })
    .catch((err) => {
      console.log(`[${color.red(date)}] : ${err}`)
    })
})
