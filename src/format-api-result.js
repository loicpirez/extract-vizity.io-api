import _ from 'lodash'

export default (result) => {
  const places = result.map((place) => {
    return _.pick(place.data,
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
      'cat_finale_label')
  })
  return places
}
