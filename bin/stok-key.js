const program = require('commander')
const stokBoa = require('../stock/stok_boa')
const expExl = require('../stock/export')
const delJson = require('../deletejson.js')
const oto_stock = require('../stock/oto_stok')
const delExl = require('../deletexlsx.js')
const stokWagoon = require('../stock/wagoon_stok/wagoon')
const stok_Knack = require('../stock/knack_stok/knack_stock')
const mida_insta = require('../stock/mida_insta')
const oto_kadin = require('../stock/kadin_stok/oto_kadin')
const boa_stok = require('../stock/boa_stok/boa_stok')
const co_stok = require('../stock/co_stok/co_stok')
const oto_erb = require ('../stock/erb_stok/oto_erb')
const oto_fiyat = require('../fiyat/oto_fiyat')

program
  .command('boa')
  .description('Boa Stok Sayımını yapar.')
  .action(stokBoa);

program
  .command('stok')
  .description('Stoku excelle çıkarır.')
  .action(expExl)

program
  .command('deljson')
  .description('Json verisini siler')
  .action(delJson)

program
  .command('delexc')
  .description('Excel verisini siler')
  .action(delExl)

program
  .command('oto_stok')
  .description('Oto Stok')
  .action(oto_stock)

program
  .command('wagoon')
  .description('wagoon stok')
  .action(stokWagoon)

program
  .command('knack')
  .description('test_knack')
  .action(stok_Knack)

program
  .command('mida_insta')
  .description('mida post')
  .action(mida_insta)

program
  .command('oto_kadin')
  .description('Kadın Stok')
  .action(oto_kadin)

program
  .command('boa_stok')
  .description('Boa Stok')
  .action(boa_stok)

program
  .command('co_stok')
  .description('Co Stok')
  .action(co_stok)

  program
  .command('oto_erb')
  .description('Erbilden Stok')
  .action(oto_erb)

  program
    .command('oto_fiyat')
    .description('Oto Boa, Knack, Wagoon, Erbilden fiyat')
    .action(oto_fiyat)


program.parse(process.argv)