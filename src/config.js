import fs from 'fs'
import path from 'path'

export default (...configNames) => {
  const config = {}
  configNames.forEach((name) => {
    config[name] = JSON.parse(fs.readFileSync(path.resolve(__dirname, `../config/${name}.json`), 'utf8'))
  })
  return config
}
