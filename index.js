  
const fs = require('fs')
const path = require('path')
const utils = require('util')
const puppeteer = require('puppeteer')
const readFile = utils.promisify(fs.readFile)

const fn = async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage()
	await page.goto('http://localhost:8080/cv.html')
	await page.pdf({ path: 'cv.pdf', format: 'A4', printBackground: true })
	await browser.close();
}

fn()