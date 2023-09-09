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

Hook.setPayload({
  embeds: [
    {
      title: 'Cron service started :D',
      color: 15257231,
      fields: [
        {
          name: 'Cron service',
          value: 'now cron is running :)',
        },
      ],
    },
  ],
})

Hook.fire()
  .then(() => {
    console.log(`[${color.blue(date)}] : State Send! :)`)
  })
  .catch((err) => {
    console.log(`[${color.red(date)}] : ${err}`)
  })

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
            value: 'Tag เรียก <@253540096853278720>',
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
            value: 'Tag เรียก <@253540096853278720>',
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

cron.schedule('0 23 * * *', () => {
  Hook.setPayload({
    embeds: [
      {
        title: 'กินแก้แพ้ด้วย!!',
        color: 15257231,
        fields: [
          {
            name: 'กินแก้แพ้ด้วยเดี๋ยวตาย',
            value: 'Tag เรียก <@387465159322632202> <@298415109359796234>',
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

cron.schedule('0 0 * * *', () => {
  Hook.setPayload({
    embeds: [
      {
        title: "Don't forget your daily commit",
        color: 15257231,
        fields: [
          {
            name: 'your daily commit is waiting for you',
            value: 'Tag เรียก <@387465159322632202> <@298415109359796234>',
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
