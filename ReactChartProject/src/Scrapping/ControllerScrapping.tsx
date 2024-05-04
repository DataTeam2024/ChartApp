import puppeteer from 'puppeteer';

async function scrapeInstagram(username: string): Promise<void> {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Navega a la página de Instagram
    await page.goto(`https://www.instagram.com/${username}`);

    // Espera a que cargue la página y extrae la información
    await page.waitForSelector('h1');

    const profileData = await page.evaluate(() => {
        const username = document.querySelector('h1')!.textContent!;
        const fullName = document.querySelector('h1 + span')!.textContent!;
        const followers = document.querySelector('span[title="Followers"]')!.parentNode!.parentNode!.querySelector('span')!.textContent!;
        const following = document.querySelector('span[title="Following"]')!.parentNode!.parentNode!.querySelector('span')!.textContent!;
        const posts = document.querySelector('span[title="Posts"]')!.parentNode!.parentNode!.querySelector('span')!.textContent!;

        return {
            username,
            fullName,
            followers,
            following,
            posts
        };
    });

    console.log('Perfil:', profileData);

    // Cierra el navegador
    await browser.close();
}
export default scrapeInstagram;

