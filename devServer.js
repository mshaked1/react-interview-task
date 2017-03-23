const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const app = express()
const port = 3000
const fs = require('fs')
const config = require('./webpack.dev.config.js')
const compiler = webpack(config)
const previousRecords = require('./mocked-data/previous-records.json')
const previousRecordsPath = './mocked-data/previous-records.json'

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/fetchPreviousRecords', function (req, res) {
  try {
    res.set('Content-Type', 'application/json')

    setTimeout(() => {
      res.json(previousRecords)
    }, 500)
  } catch (e) {
    res.status(500).send(e.stack)
  }
})

app.post('/addRecord', function(req, res) {
  let json

  try {
    fs.readFile(previousRecordsPath, 'utf8', function(err, data) {
      json = JSON.parse(data)
      json.push(req.body)
      fs.writeFile(previousRecordsPath, JSON.stringify(json, null, 2), 'utf8', function() {
        res.set('Content-Type', 'application/json')
        res.sendFile(previousRecordsPath, { root: __dirname })
      })
    })
  } catch (e) {
    res.status(500).send(e.stack)
  }
})

app.delete('/deleteRecord', function(req, res) {
  let json

  try {
    fs.readFile(previousRecordsPath, 'utf8', function(data) {
      json = JSON.parse(data)
      json.splice(req.body.id, 1)
      fs.writeFile(previousRecordsPath, JSON.stringify(json, null, 2), 'utf8', function() {
        res.set('Content-Type', 'application/json')
        res.sendFile(previousRecordsPath, { root: __dirname })
      })
    })
  } catch (e) {
    res.status(500).send(e.stack)
  }
})

app.use('/*', function (req, res) {
  res.sendFile(path.resolve('app/', 'index.html'))
})

app.listen(port, function (error) {
  if (error) {
    throw error
  }
})
