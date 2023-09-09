const IndexPage = require('./pages')

function Page(app, root) {
  require('./modules/cron')

  app.get('/', (req, res) => {
    res.send(IndexPage)
  })

  app.get('/css', (req, res) => {
    res.sendFile(root + '/static/css/main.css')
  })
}

module.exports = Page
