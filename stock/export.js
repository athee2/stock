const fs = require('fs')
const XLSX = require('xlsx')
const chalk = require('chalk');

  async function expExl() {
    await (async function() {
      const num = () => { 
        const dataBuffer = fs.readFileSync('D:/web_scarper/data.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
      }
      
      const convertJsonExcel = () => {
        const workSheet = XLSX.utils.json_to_sheet(num())
        const workBook = XLSX.utils.book_new()
      
        XLSX.utils.book_append_sheet(workBook, workSheet, "stok")
      
        // Generate Buffer
        XLSX.write(workBook, {bookType: 'xlsx', type: 'buffer'})
      
        //Binary string
        XLSX.write(workBook,{bookType: 'xlsx', type: 'binary'})
      
        XLSX.writeFile(workBook, 'C:/Users/arcen/OneDrive/Masaüstü/Oto_stok/stok.xlsx')
        console.log(chalk.bold.bgGreen('Stok Excel Dostasına Oto_Stok Klasörün içine Çıkarıldı...'))
      }
      convertJsonExcel()
    })()
    
  }

  

  module.exports = expExl
