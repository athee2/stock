const axios = require('axios')
const cheerio = require('cheerio')

const fetchGames = async () => {
  try {

    const response = await axios.get('https://www.xmlcim.com/index.php?route=product/product&product_id=130558&search=year')
    const html = response.data
    const $ = cheerio.load(html)
    const games = []

    $('option[value="2140027"]').each((index, el) => {
      const game = $(el)
      const title = game.text().replace(/\s/g,'').slice(3,6).replace('A', '').replace('d', '')
      games.push(title)
    })

    return games

  } catch (err) {
    console.log(err)
  }
}

fetchGames().then(games => console.log(parseInt(games[0])))