import _ from 'lodash'
import getPriceRange from './get-price-range'

export default (result) => {
  const places = result.map((place) => {
    const picked = _.pick(place.data,
      'lat',
      'lon',
      'nom',
      'mail',
      'adresse_1',
      'adresse_2',
      'adresse_3',
      'telephone',
      'recommande',
      'avis_petitfute',
      'cat_finale_label',
      'mig_prix',
      'cat_principale_label',
      'url')

    if (picked['cat_principale_label'] !== undefined && picked['cat_principale_label'] === "Restaurants") {
      picked['price_desc'] = getPriceRange(picked['url'])
    }
    return picked
  })
  return places
}
