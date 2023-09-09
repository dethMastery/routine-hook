const exp = require('express')
const Serve = require('./src/serve')
const Page = require('./src/page')

const app = exp()

Page(app, __dirname)
Serve(app)
