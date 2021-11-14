// urlSchema = {
//  originalUrl: string
//  shortingUrl: string
// }

const UrlShortener = {
  getShortUrl (count) {
    let url = ''
    for (let i = 0; i < count; i++) {
      url += this.getACharacter()
    }
    return url
  },
  getACharacter () {
    const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowers = uppers.toLowerCase()
    const numbers = '0123456789'
    const characters = uppers.concat(lowers, numbers)
    const cutting = Math.floor(Math.random() * characters.length)

    return characters.slice(cutting, cutting + 1)
  },
  checkUrlRepeat (list, url) {
    // check type
    if (typeof (list) !== 'object' || typeof (url) !== 'string') return console.error('type wrong');

    // check url existing
    const urlIndex = list.findIndex(item => item.originalUrl === url)
    // existing 
    if (urlIndex !== -1) return [true, list[urlIndex].shortingUrl];
    // no existing 
    console.log('there is no existing');
    return [false, '']
  },
  getNoRepeatShortingUrl (list, count) {
    // check type
    if (typeof (list) !== 'object' || typeof (count) !== 'number') return console.error('type wrong');
    // found -> create new
    // not found -> return shorting url
    let shortingUrl = this.getShortUrl(count)
    while (list.some(item => item.shortingUrl === shortingUrl)) {
      shortingUrl = this.getShortUrl(count)
    }
    return shortingUrl
  }
}

module.exports = UrlShortener