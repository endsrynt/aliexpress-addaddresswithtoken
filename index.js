const puppeteer = require('puppeteer-extra');
const chalk = require('chalk');
const moment = require('moment');
const fs = require('fs-extra');
const delay = require('delay');
const randomstring = require("randomstring");
//SC CODED BY MRSVZ1404
    (async () =>
    {
       
        const width = 1600
        const height = 1200
        const track = ''
        const selname = ''
        
    
        const file = fs.readFileSync('./LinkLogin.txt', 'utf-8');
        const splitFile = file.split('\r\n');
        console.log(chalk.yellow(`[ Total ${splitFile.length} Akun]\n`))
    
    
          for (i in splitFile) {
            const browser = await puppeteer.launch(
                {
                    headless:false,
                    waitUntil : 'load',
                    setTimeout : 9999999,
                    visualViewport :
                    {
                        width,
                        height
                    }
                }
            );
            const option = {
                waitUntil : 'load',
                setTimeout : 9999999,
                visualViewport :
                    {
                        width,
                        height
                    }
            }
            var files = fs.readFileSync('./LinkLogin.txt', 'utf-8');
            var lines = files.split('\n')
            const linkLogin = splitFile[i].split()[0]
            const page = await browser.newPage() 
            await page.goto(linkLogin,option)
            await delay(1000)
           
            await page.goto('https://ilogisticsaddress.aliexpress.com/addressList.htm', {waitUntil: 'load'})
            await delay(1000)
    
            try{
                const name  = randomstring.generate({length: 9,charset: 'abcdefghijklmnopqrstuvwxyz'});
                const name1  = randomstring.generate({length: 9,charset: 'abcdefghijklmnopqrstuvwxyz'});
                const address  = randomstring.generate({length: 9,charset: 'abcdefghijklmnopqrstuvwxyz'});
                const address2  = randomstring.generate({length: 9,charset: 'abcdefghijklmnopqrstuvwxyz'});
                const zip  = randomstring.generate({length: 5,charset: 'abcdefghijklmnopqrstuvwxyz1234567890'});
                const nohp  = randomstring.generate({length: 9,charset: '0987654321'}); 
                const randomcity1 = randomstring.generate({length: 1,charset: '54321'}); 
                const randomprovincy1 = randomstring.generate({length: 1,charset: '567894321'});   
                const pcity = "div.selector-item:nth-child(2) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1) > em:nth-child(1)"
                const pcity1 = `li.next-menu-item:nth-child(${randomprovincy1})`
                const city = "div.selector-item:nth-child(3) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1) > em:nth-child(1)"
                const city1= `.opened > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(${randomcity1})`
                const btnSave ="#address-main > div > div > div > div > div.address-save > button"
        
                await page.type("#contactPerson",name+' '+name1)
                await page.type("#mobileNo",nohp)
                await page.type("#address",address+' '+address2)
                await page.type("#address2",address2+' '+address)
                await page.type("#zip",zip)
                await page.click(pcity)
                await delay(500)
                await page.click(pcity1)
                await delay(1000)
                await page.click(city)
                await delay(2000)
                await page.click(city1)
                await delay(1000)
                await page.click(btnSave,{waitUntil : 'load'})
                await page.waitForSelector('#address-main > div > div > div.address-list-wrap > div > div.address-detail.big-detail > div')
                const pcitys = await page.$eval('#address-main > div > div > div.address-list-wrap > div > div.address-detail.big-detail > div',(el) => el.innerText);
                await delay(3000)
                console.log(chalk.green(`SUCCESS SET ADDRESS KE PROVINCY ${pcitys}`))
               
            }
            catch(e)
            {
                console.log(chalk.red(e));
            }
            await browser.close()
          }
         
          console.log(chalk.green('SUCCESS SET ADDRESS'))
             
            
    })();
    







