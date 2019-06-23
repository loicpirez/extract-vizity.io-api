#!/usr/bin/env node

import readConfig from './config'
import getApiUrls from './get-api-urls'
import formatApiResult from './format-api-result'
import request from 'sync-request'
import fs from 'fs'
import path from 'path'

const config = readConfig('categories', 'towns')
let json = {}
Object.keys(config.towns).forEach(town => {
  json[town] = getApiUrls(config, town).map((data) => {
    let category = data[0]
    let url = data[1]
    const response = formatApiResult(JSON.parse(request('GET', url).getBody('utf8')))
    return {
      [category]: response
    }
  })
}
)

try {
  fs.writeFileSync(path.resolve(__dirname, './result.json'), JSON.stringify(json, null, 4))
} catch (err) {
  console.error(err)
}
