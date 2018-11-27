import mainService from './main.service'

const gotService = {
  listsAllCharacters,
  getACharacter
}

/**
 * @description get all GoT characters.
 * @method listsAllCharacters
 * @return {Obj} response, an object with the information of all the GoT characters.
 */
export function listsAllCharacters () {
  return mainService.get('/characters').then((res) => {
    return res.data
  }).catch((error) => {
    console.error(error)
    return { error: error }
  })
}

/**
 * @description get the detail of a specific GoT character.
 * @method getACharacter
 * @param {string} id. the "_id" of the GoT character.
 * @return {Obj} response, an object with the information of all the GoT characters.
 */
export function getACharacter (id) {
  return mainService.get('/characters/byId/' + id)
      .then(res => {
        return res.data
      }).catch(error => {
        console.error(error);
        return {error:error}
      });
}

export default gotService
