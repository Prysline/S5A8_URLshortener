const mongoose = require('mongoose')
const db = require('../../config/mongoose')
const Url = require('../url')
const originalUrls = [
  { originalUrls: 'https://www.google.com/' },
  { originalUrls: 'https://tw.alphacamp.co/' },
  { originalUrls: 'https://www.wikipedia.org/' },
  { originalUrls: 'https://tw.yahoo.com/' },
  { originalUrls: 'https://www.plurk.com/' },
  { originalUrls: 'https://www.youtube.com/' }
]

db.once('open', () => {
  console.log('[seeder]mongodb connected!')
  originalUrls.forEach(item => {
    let shortingUrlTemp = getShortUrl(5)
    while (originalUrls.filter(item => item.shortingUrl === shortingUrlTemp).length > 0) {
      shortingUrlTemp = getShortUrl(5)
    }
    item.shortingUrl = shortingUrlTemp
  })
  originalUrls.forEach(item => Url.create(item))
})

function getShortUrl (count) {
  let url = ''
  for (let i = 0; i < count; i++) {
    url += getACharacter()
  }
  return url
}

function getACharacter () {
  const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowers = uppers.toLowerCase()
  const numbers = '0123456789'
  const characters = uppers.concat(lowers, numbers)
  const cutting = Math.floor(Math.random() * characters.length)

  return characters.slice(cutting, cutting + 1)
}