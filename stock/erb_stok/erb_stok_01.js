const fs = require('fs')
const express = require('express');
const chalk = require('chalk')
const path = require('path');
const axios = require('axios')
const cheerio = require('cheerio')


async function stokErb() {
  await (async function () {
    const PORT = 5796;

    const app = express()

    const loadNotes = () => {
      try {
        const dataBuffer = fs.readFileSync("D:/web_scarper/stock/erb_stok/dataErb.json")// need revision
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

      } catch {
        return []
      }
    }

    const saveNotes = (num) => {
      const dataJSON = JSON.stringify(num)
      fs.writeFileSync('D:/web_scarper/stock/erb_stok/dataErb.json', dataJSON) // need revision

    }

    app.listen(PORT, () => console.log(chalk.bgGreen(`server running on PORT ${PORT}`)))


    let json = JSON.parse(fs.readFileSync(path.join(__dirname, 'erb_veri.json')));


    let veriLenght = json.link.length
    let linkVeri = json.link
    let barkodVeri = json.barkod
    let idVeri = json.id


    await (async function erb_fun1() {
      try {
        await (async function () {

          
          // Loop Function
           for (i = 0; i < veriLenght; i++ ) {

            await (async function() {
              const idNum = Number(idVeri[i])

              let idNum35 = idNum-1
              let idNum36 = idNum
              let idNum37 = idNum+1
              let idNum38 = idNum+2
              let idNum39 = idNum+3
              let idNum40 = idNum+4


              let idNumSon35 = idNum35.toString()
              let idNumSon36 = idNum36.toString()
              let idNumSon37 = idNum37.toString()
              let idNumSon38 = idNum38.toString()
              let idNumSon39 = idNum39.toString()
              let idNumSon40 = idNum40.toString()

              try {
                const erb01_35 = async () => {
                  try {
                    const response = await axios.get(linkVeri[i])
                    const html = response.data
                    const $ = cheerio.load(html)
                    const erb_35 = []
                
                    $(`option[value="${idNumSon35}"]`).each((index, el) => {
                      const erb = $(el)
                      const title = erb.text().replace(/\s/g,'').slice(3,6).replace('A', '').replace('d', '')
                      erb_35.push(title)
                    })
                
                    return erb_35
                
                  } catch (err) {
                    return 0
                  }
                }

                const erb01_36 = async () => {
                  try {
                
                    const response = await axios.get(linkVeri[i])
                    const html = response.data
                    const $ = cheerio.load(html)
                    const erb_36 = []
                
                    $(`option[value="${idNumSon36}"]`).each((index, el) => {
                      const erb = $(el)
                      const title = erb.text().replace(/\s/g,'').slice(3,6).replace('A', '').replace('d', '')
                      erb_36.push(title)
                    })
                
                    return erb_36
                
                  } catch (err) {
                    return 0
                  }
                }


                const erb01_37 = async () => {
                  try {
                
                    const response = await axios.get(linkVeri[i])
                    const html = response.data
                    const $ = cheerio.load(html)
                    const erb_37 = []
                
                    $(`option[value="${idNumSon37}"]`).each((index, el) => {
                      const erb = $(el)
                      const title = erb.text().replace(/\s/g,'').slice(3,6).replace('A', '').replace('d', '')
                      erb_37.push(title)
                    })
                
                    return erb_37
                
                  } catch (err) {
                    return 0
                  }
                }

                const erb01_38 = async () => {
                  try {
                
                    const response = await axios.get(linkVeri[i])
                    const html = response.data
                    const $ = cheerio.load(html)
                    const erb_38 = []
                
                    $(`option[value="${idNumSon38}"]`).each((index, el) => {
                      const erb = $(el)
                      const title = erb.text().replace(/\s/g,'').slice(3,6).replace('A', '').replace('d', '')
                      erb_38.push(title)
                    })
                
                    return erb_38
                
                  } catch (err) {
                    return 0
                  }
                }

                const erb01_39 = async () => {
                  try {
                
                    const response = await axios.get(linkVeri[i])
                    const html = response.data
                    const $ = cheerio.load(html)
                    const erb_39 = []
                
                    $(`option[value="${idNumSon39}"]`).each((index, el) => {
                      const erb = $(el)
                      const title = erb.text().replace(/\s/g,'').slice(3,6).replace('A', '').replace('d', '')
                      erb_39.push(title)
                    })
                
                    return erb_39
                
                  } catch (err) {
                    return 0
                  }
                }

                const erb01_40 = async () => {
                  try {
                
                    const response = await axios.get(linkVeri[i])
                    const html = response.data
                    const $ = cheerio.load(html)
                    const erb_40 = []
                
                    $(`option[value="${idNumSon40}"]`).each((index, el) => {
                      const erb = $(el)
                      const title = erb.text().replace(/\s/g,'').slice(3,6).replace('A', '').replace('d', '')
                      erb_40.push(title)
                    })
                
                    return erb_40
                
                  } catch (err) {
                    return 0
                  }
                }

                data = loadNotes()

                data.push({
                  "Barkod": `${barkodVeri[i]}35`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": parseInt(await erb01_35().then(erb_35 => erb_35[0])),
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}36`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": parseInt(await erb01_36().then(erb_36 => erb_36[0])),
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}37`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": parseInt(await erb01_37().then(erb_37 => erb_37[0])),
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}38`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": parseInt(await erb01_38().then(erb_38 => erb_38[0])),
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}39`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": parseInt(await erb01_39().then(erb_39 => erb_39[0])),
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}40`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": parseInt(await erb01_40().then(erb_40 => erb_40[0])),
                })
    
                await saveNotes(data)
    
                await console.log(chalk.bgGrey.bold(`${barkodVeri[i]}...`))
    
              } catch (err) {
                data = loadNotes()
    
                data.push({
                  "Barkod": `${barkodVeri[i]}35`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": 0,
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}36`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": 0,
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}37`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": 0,
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}38`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": 0,
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}39`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": 0,
                })
  
                data.push({
                  "Barkod": `${barkodVeri[i]}40`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": 0,
                })
  
                await console.log(err)
                await console.log(chalk.bgRed.bold(`${barkodVeri[i]}... Error`))
  
                await saveNotes(data)
  
              }
              
            })()


           }
          

        })();
      } catch (err) {
        console.log(chalk.bgRed.bold(err, `General error`))
      }
    })();
    await (async function () {
      await console.log(chalk.bgBlue.bold('Finished...'))
    })();
  })()
}


module.exports = stokErb