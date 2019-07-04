import { mapUrl } from './constant'

export default (config, town) => {
  return config.towns[town].categories.map((category) => {
    return [
      category,
      mapUrl.replace(
        'SELECTED_TOWN_ID', config.towns[town].id).replace(
        'SELECTED_CATEGORY_ID', config.categories.filter((search) => { return search.name === category }).shift().id
      )
    ]
  })
}
