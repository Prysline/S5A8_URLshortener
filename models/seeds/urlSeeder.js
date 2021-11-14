const mongoose = require('mongoose')
const db = require('../../config/mongoose')
const Url = require('../url')
const US = require('../../scripts/URLshortener')
const originalUrls = [
  { originalUrl: 'https://www.google.com/' },
  { originalUrl: 'https://tw.alphacamp.co/' },
  { originalUrl: 'https://www.wikipedia.org/' },
  { originalUrl: 'https://tw.yahoo.com/' },
  { originalUrl: 'https://www.plurk.com/' },
  { originalUrl: 'https://www.youtube.com/' }
]

db.once('open', () => {
  console.log('[seeder]mongodb connected!')
  originalUrls.forEach(item => {
    item.shortingUrl = US.getNoRepeatShortingUrl(originalUrls, 5)
  })
  originalUrls.forEach(item => Url.create(item))
  console.log('[seeder]done!')
})