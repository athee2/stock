const fs = require('fs')

async function erb_delExl() {
  await (async function() {
    const path = "C:/Users/arcen/OneDrive/Masaüstü/Oto_stok/erb_stok.xlsx"

    try {
      fs.unlinkSync(path)
      console.log('Excel dosyası silindi', path)
    } catch (err) {
      console.log(err)
    }
  })()
}

module.exports = erb_delExl