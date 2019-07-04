import _ from 'lodash'
import request from 'syncrequest'
import { websiteUrl } from './constant'
import cheerio from 'cheerio'
var decode = require('unescape');

export default (urlArgs) => {
  const pickedUrl = encodeURI(websiteUrl + urlArgs)
  const page = request.sync(pickedUrl).body.trim()
  const $ = cheerio.load(page)
  return $('.desc-estab').text()
}
