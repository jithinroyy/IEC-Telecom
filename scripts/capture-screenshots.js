const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const OUT = path.join(__dirname, '..', 'docs');
const URL = 'https://iec-telecom.com/en/';

async function acceptCookies(page) {
  try {
    await page.waitForSelector('button', { timeout: 5000 });
    const accepted = await page.evaluate(() => {
      const buttons = [...document.querySelectorAll('button')];
      const accept = buttons.find((b) => /accept all/i.test(b.textContent || ''));
      if (accept) {
        accept.click();
        return true;
      }
      return false;
    });
    if (accepted) await new Promise((r) => setTimeout(r, 800));
  } catch (_) {}
}

async function shot(page, name, options = {}) {
  const file = path.join(OUT, name);
  await page.screenshot({ path: file, type: 'png', ...options });
  console.log('Saved', name);
}

async function main() {
  if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

  const browser = await puppeteer.launch({ headless: true, defaultViewport: { width: 1440, height: 900 } });
  const page = await browser.newPage();

  await page.goto(URL, { waitUntil: 'networkidle2', timeout: 60000 });
  await acceptCookies(page);

  if (!fs.existsSync(path.join(OUT, '01-cover-homepage.png'))) {
    await shot(page, '01-cover-homepage.png');
  }

  if (!fs.existsSync(path.join(OUT, '02-header-alignment.png'))) {
    const header = await page.$('header, .header, [class*="header"]');
    if (header) {
      await shot(page, '02-header-alignment.png', { clip: await header.boundingBox() });
    } else {
      await shot(page, '02-header-alignment.png', { clip: { x: 0, y: 0, width: 1440, height: 120 } });
    }
  }

  await page.goto(URL, { waitUntil: 'networkidle2' });
  await acceptCookies(page);

  const menuClicked = await page.evaluate(() => {
    const links = [...document.querySelectorAll('a, button')];
    const menu = links.find((el) => /menu/i.test(el.textContent || '') && el.offsetParent !== null);
    if (menu) {
      menu.click();
      return true;
    }
    return false;
  });

  if (menuClicked) {
    await new Promise((r) => setTimeout(r, 1200));
    if (!fs.existsSync(path.join(OUT, '04-menu-core-offerings.png'))) {
      await shot(page, '04-menu-core-offerings.png');
    }
    await page.keyboard.press('Escape');
    await new Promise((r) => setTimeout(r, 500));
  }

  await page.evaluate(() => {
    const news = document.querySelector('.news-v2, [class*="news"]');
    if (news) news.scrollIntoView({ block: 'center' });
  });
  await new Promise((r) => setTimeout(r, 600));
  await shot(page, '06-featured-news-contrast.png');

  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 400));
  await shot(page, '07-hero-messaging.png', { clip: { x: 0, y: 0, width: 1440, height: 520 } });

  await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    if (h1) h1.scrollIntoView({ block: 'center' });
  });
  await new Promise((r) => setTimeout(r, 600));
  await shot(page, '08-h1-body-copy.png', { clip: { x: 80, y: 200, width: 1280, height: 420 } });

  await page.evaluate(() => {
    const form = document.querySelector('form, .iec_single_office_contact_us, [class*="contact"]');
    if (form) form.scrollIntoView({ block: 'center' });
  });
  await new Promise((r) => setTimeout(r, 600));
  await shot(page, '11-homepage-contact-form.png');

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise((r) => setTimeout(r, 800));
  await shot(page, '13-footer-full.png', { clip: { x: 0, y: 650, width: 1440, height: 250 } });

  await shot(page, '15-full-homepage.png', { fullPage: true });

  await browser.close();
  console.log('Capture complete.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
