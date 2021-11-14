const express = require('express')
const Url = require('../../models/url')
const router = express.Router()
const US = require('../../scripts/URLshortener')

router.get('/', (req, res) => {
  res.render('index', { logoURL: '#' })
})

router.post('/', (req, res) => {
  const originalUrl = req.body.originalUrl
  let shortingUrl = ''
  Url.find()
    .lean()
    .then(urls => {
      const UrlRepeat = US.checkUrlRepeat(urls, originalUrl)
      if (UrlRepeat[0]) {
        shortingUrl = UrlRepeat[1]
      } else {
        console.log('no existing');
        shortingUrl = US.getNoRepeatShortingUrl(urls, 5)
        Url.create({ originalUrl, shortingUrl })
      }
      res.render('success', { logoURL: '/', shortingUrl })
    })
    .catch(error => console.log(error))
})

// 轉址
router.get('/:shortingUrl', (req, res) => {
  const shortingUrl = req.params.shortingUrl
  console.log(req.params);
  let targetUrl = ''
  Url.find()
    .lean()
    .then(urls => {
      const target = urls.find(item => item.shortingUrl === shortingUrl)
      targetUrl = target.originalUrl
      res.redirect(targetUrl)
    })
    .catch(error => console.log(error))
})

module.exports = router