  
const puppeteer = require('puppeteer')

const fn = async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage()
	await page.goto('http://localhost:8080/cv.html')
	await page.pdf({ path: 'cv.pdf', format: 'A4', printBackground: true })
	await browser.close();
}

fn()