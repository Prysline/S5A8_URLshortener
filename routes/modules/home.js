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
      // 【輸入相同網址時，產生一樣的縮址】
      // 此處檢查是否已存在相同網址
      // 已存在： return [true, 既有縮址]
      // 不存在： return [false], '']
      const UrlRepeat = US.checkUrlRepeat(urls, originalUrl)
      if (UrlRepeat[0]) {
        shortingUrl = UrlRepeat[1]
      } else {
        console.log('no existing');
        // 亂數產生網址時，有可能會對兩個不同的網址，產生了重覆的亂數組合
        // 在此函式中會取得不重複的組合
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