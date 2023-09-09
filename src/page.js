function Page(app, root) {
  require('./modules/cron')

  app.get('/', (req, res) => {
    res.send('Spawned')
  })
}

module.exports = Page
