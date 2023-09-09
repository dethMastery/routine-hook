function Page(app, root) {
  app.get('/', (req, res) => {
    res.send('Spawned')
  })
}

module.exports = Page