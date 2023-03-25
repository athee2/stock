const axios = require('axios')
const cheerio = require('cheerio')



axios.get('https://www.xmlcim.com/index.php?route=product/product&product_id=130558&search=year')
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        let erb_35 = []

        $('option[value="2140027"]', html).each(function ()  {
            let erb01_35 = $(this).text().replace(/\s/g,'').slice(3,6).replace('A', '').replace('d', '')
            erb_35.push(erb01_35)
        })
})





