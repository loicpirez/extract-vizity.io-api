require('dotenv').config()

const url = process.env.API_URL

export default (config, town) => {
  return config.towns[town].categories.map((category) => {
    return [
      category,
      url.replace(
        'SELECTED_TOWN_ID', config.towns[town].id).replace(
        'SELECTED_CATEGORY_ID', config.categories.filter((search) => { return search.name === category }).shift().id
      )
    ]
  })
}
