import puppetteer from 'puppeteer';

const childProcess = require('child_process');

let server = null;

jest.setTimeout(30000);
describe('Проверка работоспособности', () => {
    let browser = null;
    let page = null;
    const baseUrl = 'http://localhost:9000/';
    beforeAll(async () => {
        server = await childProcess.fork(`${__dirname}/test-server.js`);
        await new Promise((resolve, reject) => {
          server.on('error', () => {
            reject();
          });
          server.on('message', (message) => {
            if (message === 'ok') {
              resolve();
            }
          });
        });
        browser = await puppetteer.launch({
            //headless: false,
            //slowMo: 100,
            //devtools: true,
        });
        page = await browser.newPage();
    });
    afterAll(async () => {
        await browser.close();
    });
    describe('Проверка по товарам', () => {
        test('Проверка добавления нового продукта', async () => {
            await page.goto(baseUrl);
            const addProduct = await page.$('.add-product');
            addProduct.click();

            await page.waitForSelector('[id=popup]', { visible: true });
            const inputName = await page.$('#input-text');
            expect(await inputName.evaluate((node) => node.value)).toBe('');
        });

        test('Проверка изменения продукта', async () => {
            await page.goto(baseUrl);
            const changeProduct = await page.$('.change-product');
            changeProduct.click();

            await page.waitForSelector('[id=popup]', { visible: true });
            const inputName = await page.$('#input-text');
            expect(await inputName.evaluate((node) => node.value)).not.toBe('');
        });

        test('Проверка сохранения продукта', async () =>{
            await page.goto(baseUrl);
            const addProduct = await page.$('.add-product');
            addProduct.click();

            await page.waitForSelector('[id=popup]', { visible: true });

            const buttonSave = await page.$('#button-save');
            buttonSave.click();

            await page.waitForSelector('[id=form-error]', { visible: true });
        });

        test('Проверка удаления продукта', async () => {
            await page.goto(baseUrl);
            const deleteProduct = await page.$('.delete-product');
            deleteProduct.click();

            await page.waitForSelector('[id=removed]', { visible: true });
        });
    });
});