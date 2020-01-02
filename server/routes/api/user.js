const fetch = require('fetch-everywhere')

const baseUrl = 'http://api.steampowered.com'
const STEAM_API_KEY = '?key=1AE163F53B88E96B29244A91DCF766DC'

module.exports = app => {
  app.get('/:userId', (req, res) => {
    fetch(
      `${baseUrl}/ISteamUser/GetPlayerSummaries/v0002/${STEAM_API_KEY}&steamids=${req.params.userId}`
    )
      .then(response => {
        if (response.status >= 400) {
          throw new Error('Bad response from server')
        }
        res.send({ response })
      })
      .catch(err => {
        throw new Error(err)
      })
  })

  app.get('/:userId/games/owned', (req, res) => {
    fetch(
      `${baseUrl}/IPlayerService/GetOwnedGames/v0001/${STEAM_API_KEY}&steamid=${req.params.userId}&format=json&include_played_free_games=true`
    )
      .then(response => {
        if (response.status >= 400) {
          throw new Error('Bad response from server')
        }
        res.send({ response })
      })
      .catch(err => {
        throw new Error(err)
      })
  })

  app.get('/:userId/games/played', (req, res) => {
    fetch(
      `${baseUrl}/IPlayerService/GetRecentlyPlayedGames/v0001/${STEAM_API_KEY}&steamid=${req.params.userId}&format=json`
    )
      .then(response => {
        if (response.status >= 400) {
          throw new Error('Bad response from server')
        }
        res.send({ response })
      })
      .catch(err => {
        throw new Error(err)
      })
  })
}
