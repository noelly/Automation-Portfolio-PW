import { test } from '@playwright/test'
import { PageManager } from '../../pages/pageManager.Page';
import { subMenus } from '../../data/homepageheadersMT.data';

test.beforeEach(async ({ page }) => {
  const pm = new PageManager(page);
  await pm.homepage().navigateTo();
  await pm.accessDeniedPage().isAccessDenied("Motortrend");
});

test('Verify Homepage hero section', async ({ page }) => {
  const pm = new PageManager(page);
  await test.step(`Verify homepage hero section`, async () => {
    await pm.homepage().verifyHeroSection();
  });

  await test.step(`Verify homepage hero article section`, async () => {
    await pm.homepage().verifyHeroArticle();
  });

  await test.step(`Verify homepage title`, async () => {
    await pm.homepage().verifyPageTitle('MotorTrend: New Cars - Car News and Expert Reviews');
  });

  await test.step(`Verify all headers`, async () => {
    await pm.homepage().verifyAllheaders(subMenus);
  });
});

test('verify Articles', async ({ page }) => {
  const pm = new PageManager(page);
  await pm.homepage().verifyAllarticles();
  await pm.homepage().getRiverArticles(89);
});
