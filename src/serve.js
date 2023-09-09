const color = require('bash-color')

require('dotenv').config()

function Serve(app) {
  const port = process.env.PORT || 3001

  app.listen(port, () => {
    console.log('')
    console.log(`Server Started @ ${color.cyan(`http://localhost:${port}`)}`)
    console.log(`Started time : ${new Date()}`)
    console.log('')
  })
}

module.exports = Serve
