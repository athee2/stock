const stokErb = require('./erb_stok')
const stokErb_01 = require('./erb_stok_01')
const erb_delExl = require('./erb_deletexlsx')
const erb_delJson = require('./erb_deletejson')
const erb_expExl = require('./erb_export')

async function oto_erb() {
  await (async function() {
    
      await (async function() {
        await erb_delJson()
      })(),
      await (async function() {
        await stokErb_01()
      })(),
      await (async function() {
        await erb_expExl()
      })()
      // await (async function() {
      //   await upload_stok()
      // })(),
      // await (async function() {
      //   await delExl()
      // })(),
      // await (async function() {
      //   await exitPro()
      // })()

  })()
}

module.exports = oto_erb